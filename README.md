# Offline Request Buffering Application

## Overview

This application interacts with a specified webhook endpoint and is designed to handle offline scenarios gracefully. When the internet connection is unavailable, the application buffers requests and sends them once the connection is restored. It uses IndexedDB to store buffered requests and manage them efficiently.

## Features

Send Requests: Press the "Hit Me" button to send a request to the webhook endpoint.
Offline Handling: Buffer requests when offline and automatically send them when the internet is restored.
Data Storage: Uses IndexedDB for buffering requests and managing offline data.

## Getting Started

#### Prerequisites

Node.js (v18 or later)
npm

## Installation

#### Clone the Repository

`git clone https://github.com/Jerry-Sharma21/-mad_machines_assignment.git`

#### Install Dependencies

`npm install`

#### Run the Application

`npm run dev`
The application will be accessible at [http://localhost:5173](http://localhost:5173)

This will start the Vite development server and open the application in your browser.
