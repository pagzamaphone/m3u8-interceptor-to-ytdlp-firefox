# m3u8-interceptor-to-ytdlp-firefox
This Firefox extension monitors background network traffic to intercept M3U8 streaming playlists and automatically generates the command required to download the video using yt-dlp. It extracts the raw stream URL, captures the required referer header, and formats the output filename based on the active browser tab title.

## Prerequisites
You must have yt-dlp installed and accessible from your command prompt or terminal environment. 

## Installation
1. Clone or download this repository to your local machine.
2. Open Firefox and navigate to about:debugging in the address bar.
3. Click on "This Firefox" in the left sidebar menu.
4. Click the "Load Temporary Add-on" button.
5. Select the manifest.json file from the downloaded folder.

## Usage
1. Navigate to the webpage containing the video stream you wish to download.
2. Initiate playback on the video player to trigger the background network request.
3. Click the extension icon in your Firefox toolbar.
4. Click the "Copy Command" button to copy the formatted string to your clipboard.
5. Paste the copied string directly into your terminal.
