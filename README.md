# discordbot [![version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/sekuja/discordbot)

### This project contains two Discord Bots:
1. **Auto Chat Delete Bot** (`autoChatDel.js`): Automatically sends messages to a specified channel and deletes them after a specified time.
2. **Auto Chat Save Bot** (`autoChatSave.js`): Automatically sends messages to a specified channel and keeps them.

## Requirements

- [Node.js](https://nodejs.org/) installed
- A Discord account
- Your `DISCORD_TOKEN` and the `CHANNEL_ID` where you want to send messages

## Steps

### 1. Clone the repository

```
git clone https://github.com/sekuja/discordbot.git
cd discordbot
```

### 2. Install dependencies

```
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the project directory and add your Discord Token and the Channel ID:

```
DISCORD_TOKEN=your_discord_token_here
CHANNEL_ID=your_channel_id_here
```

### How to get the `DISCORD_TOKEN` on Discord:
1. Open Discord.
2. Choose any channel.
3. Right-click on the message text area and select `Inspect` or click `F12`.
4. Click the `Network` tab, then in the Filter section, choose `Fetch/XHR`.
5. Type anything in the message text area, and you will see a `typing` request appear.
6. Click on the `typing` request, go to the `Headers` tab, and scroll down to the `Request Headers` section.
7. You will find your `DISCORD_TOKEN` under the `Authorization` field.

### How to get the `CHANNEL_ID` on Discord:
1. Open Discord.
2. Select any channel. For example, in the General chat: `https://discord.com/channels/1056225957796659261/1056225958295785564`. 
3. The number `1056225958295785564` at the end of the URL is the `CHANNEL_ID`.

## Usage

### Running the Auto Chat Delete Bot

This bot sends messages to the specified channel and deletes them after a short delay.

```
npm run start:autoChatDel
```

### Running the Auto Chat Save Bot

This bot sends messages to the specified channel and keeps them.

```
npm run start:autoChatSave
```

## Code Overview

`autoChatDel.js`
This script sends a message to a specified Discord channel every 15 seconds and deletes it after 10 seconds.

By: GitHub: [Sekuja](https://github.com/sekuja) | Twitter: [Sekuja](https://x.com/0xSekuja) | Telegram: [Sekuja](https://t.me/sekuja)