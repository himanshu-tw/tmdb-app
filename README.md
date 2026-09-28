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

### Get your TMDB Beared Token
1. Log in to your [TMDB Account](https://www.themoviedb.org/).
2. Click on your profile icon in the top right and go to Settings.
3. Click on API in the left sidebar.
4. Scroll down to the API Read Access Token (v4 auth) section.
5. Click Create (or copy the existing token). It will be a long string starting with eyJ....

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
## Usage

### Fetch currently playing movies
bun dev --type "playing"

### Fetch popular movies
bun dev --type "popular"

### Fetch top-rated movies
bun dev --type "top"

### Fetch upcoming movies
bun dev --type "upcoming"

## Expected Output

🎬 Fetching "POPULAR" movies from TMDB...

┌─────────┬────────┬──────────────────────────────┬──────────────┬────────┬────────────┐
│ (index) │   ID   │            Title             │ Release Date │ Rating │ Popularity │
├─────────┼────────┼──────────────────────────────┼──────────────┼────────┼────────────┤
│    0    │ 12345  │ "Awesome Movie Title"        │ "2023-10-25" │ "8.5"  │ "450"      │
│    1    │ 67890  │ "Another Great Film"         │ "2023-11-01" │ "7.9"  │ "320"      │
└─────────┴────────┴──────────────────────────────┴──────────────┴────────┴────────────┘

✅ Successfully fetched 20 movies (Page 1 of 500).
