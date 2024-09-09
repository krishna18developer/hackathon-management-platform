pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'nextjs'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'production', url: 'https://github.com/krishna18developer/hackathon-management-platform.gitt'
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

        stage('Build Next.js Frontend') {
            steps {
                script {
                    dir(FRONTEND_DIR) {
                        sh '''
                        npm install
                        npm run build
                        pm2 restart nextjs || pm2 start npm --name "nextjs" -- start
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