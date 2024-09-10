pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'hackattack'
        SERVER_IP = '<your-aws-instance-ip>'  // Update with your AWS instance IP
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'production', url: 'https://github.com/krishna18developer/hackathon-management-platform.git'
            }
        }

        stage('Build Go Backend') {
            steps {
                script {
                    dir(BACKEND_DIR) {
                        sh '''
                        go build -o backend
                        pkill -f backend || true
                        nohup ./backend > backend.log 2>&1 &
                        '''
                    }
                }
            }
        }

        stage('Build React Frontend') {
            steps {
                script {
                    dir(FRONTEND_DIR) {
                        sh '''
                        echo 'In Progress'
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}