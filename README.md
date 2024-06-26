
# LinkedIn Profile Fetcher

## Description:
This Chrome extension fetches LinkedIn profile data and posts it to a Node.js-Express-Sequelize backend.

## Installation:
1. Clone the repository.
2. Install dependencies for both the backend and the extension using `npm install`.
3. Start the backend server with `node index.js`.
4. Load the extension in Chrome by navigating to `chrome://extensions/` and clicking "Load unpacked," then selecting the extension directory.

## Usage:
1. Manually log into LinkedIn.
2. Enter LinkedIn profile URLs separated by commas into the extension popup.
3. Click the "Fetch Profiles" button to start fetching data from the provided URLs.

## Files:
- `background.js`: Handles communication between the extension popup and content scripts.
- `content.js`: Scrapes LinkedIn profile data and sends it to the backend API.
- `popup.html`: HTML layout for the extension popup.
- `popup.js`: JavaScript code for handling user interaction in the extension popup.
- `manifest.json`: Manifest file for the Chrome extension.
- `index.js`: Node.js backend code with Express and Sequelize setup.
- `database.sqlite`: SQLite database file.

## Dependencies:
- Express
- Body-parser
- Sequelize
- SQLite3

## API Endpoints:
- `POST /api/profiles`: Receives LinkedIn profile data and saves it to the database.

