# 🚧 Project Status: In Progress

This project is still in process. Features and documentation may change as development continues.

# Realtime Code Editor

A real-time collaborative code editor built with Yjs and WebSockets.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kejal2005/Realtime-code-editor.git
   cd Realtime-code-editor
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

### Start the WebSocket Server

Navigate to the server directory and run:
```sh
cd server
node server.js
```

You should see:
```
✅ Yjs WebSocket Server running at ws://localhost:1234
```

### Client Setup

Connect your client to `ws://localhost:1234` for real-time collaboration.

## Deployment

### Deploying to Render

1. Push your code to GitHub:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/kejal2005/Realtime-code-editor.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [Render](https://render.com), create a new Web Service, and connect your GitHub repo.

3. Set the build command to `npm install` and the start command to `npm start`.

4. Deploy and use the provided WebSocket URL in your client.

## License

ISC

## Contributions

Contributions and suggestions are welcomed! Please open an issue or submit a pull request if you'd like to help improve this project.
