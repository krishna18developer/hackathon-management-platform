# Hackathon Management Platform

## Overview

The Hackathon Management Platform is a full-stack application designed to streamline the organization and management of hackathons. The platform provides an interface for both organizers and participants, allowing for efficient management of events, project submissions, judging, and results announcement. The backend is built using Go, providing a robust and scalable API, while the frontend is developed with Next.js, offering a modern and responsive user experience.

## Features

- **Event Management**: Organizers can create and manage hackathons, including setting dates, rules, and participant requirements.
- **Participant Registration**: Users can register for events, create teams, and manage their profiles.
- **Project Submission**: Teams can submit their projects for judging, including code repositories, documentation, and demo videos.
- **Judging System**: Judges can score projects based on predefined criteria, and the platform will automatically calculate and display the results.
- **Real-time Updates**: Keep participants updated with live announcements, schedules, and results.

## Tech Stack

- **Backend**: 
  - Language: Go
  - Framework: Gin
  - Database: MongoDB
  - Authentication: JWT (JSON Web Tokens)
  - API: RESTful
- **Frontend**:
  - Framework: Next.js
  - Language: TypeScript
  - Styling: Tailwind CSS (or styled-components, CSS modules, etc.)
  - State Management: React Context API (or Redux, Zustand, etc.)
  - API Integration: Axios (or Fetch API)

## Installation

### Prerequisites

- **Backend**: Go (v1.18+), MongoDB
- **Frontend**: Node.js (v16+), npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/krishna18developer/hackathon-management-platform.git
cd hackathon-management-platform
```

### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Install Go dependencies**:
    ```bash
    go mod tidy
    ```

3. **Set up environment variables**:
    - Create a `app.env` file in the backend directory with the following:
    ```bash
    MONGO_URI_ADDRESS=mongodb://localhost:27017
    PORT=5000
    DATABASE_NAME=hackathon-management-platform
    ```
4. **Start the Go server**:
    ```bash
    go run main.go
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd nextjs
    ```

2. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env.local` file in the frontend directory with the following:
    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:8080/api
    ```

4. **Run the Next.js development server**:
    ```bash
    npm run dev
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application at `http://localhost:3000`. The API will be available at `http://localhost:8080/api`.

### Development

- **Backend**: Make changes to the Go code and the server will automatically reload.
- **Frontend**: Modify React components and styles; Next.js will hot-reload the changes.

### Production

- **Backend**: Build the Go application and deploy it using a server or container.
- **Frontend**: Generate a production build using:
  ```bash
  npm run build
  ```
  Deploy the output to a static site hosting service or a Node.js server.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.