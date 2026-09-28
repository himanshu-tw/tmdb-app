# 🎬 TMDB CLI

A fast, lightweight Command Line Interface (CLI) tool built with [Bun](https://bun.sh/) to fetch and display movie data from The Movie Database (TMDB) API.

This project is part of the [Roadmap.sh Backend Developer Project](https://roadmap.sh/projects/tmdb-cli).

## ✨ Features

- 🎯 **Dynamic Endpoints**: Fetch different movie categories using simple CLI flags.
- 📊 **Beautiful Output**: Formats API responses into clean, readable terminal tables using `console.table`.
- 🔒 **Secure**: Uses environment variables (`.env`) to keep your TMDB API credentials safe.
- 🛡️ **Robust Error Handling**: Graceful fallbacks and clear error messages for missing tokens or invalid arguments.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A free [TMDB Account](https://www.themoviedb.org/) to generate an API Read Access Token.

### Installation & Setup

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/himanshu-tw/tmdb-app.git
   ```
2. Navigate to the project directory:
    ```bash
    cd tmdb-app
    ```
3. Run the app:
    ```bash
    bun dev --type "top"
    ```
