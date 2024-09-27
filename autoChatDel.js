require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const schedule = require('node-schedule');
const fs = require('fs');
const path = require('path');

const client = new Client();

function readMessagesFromFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').filter(line => line.trim() !== '');
}

const messages = readMessagesFromFile(path.join(__dirname, 'wordlist.txt'));

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

client.on('ready', () => {
    console.log('Self-bot ready!');
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);

    if (channel) {
        schedule.scheduleJob('*/15 * * * * *', async () => {
            try {
                const randomMessage = getRandomMessage();
                const message = await channel.send(randomMessage);
                setTimeout(() => {
                    message.delete()
                        .then(() => console.log('Message deleted.'))
                        .catch(console.error);
                }, 10000);
            } catch (error) {
                console.error('Failed to send message:', error);
            }
        });
    } else {
        console.error('Channel not found.');
    }
});

client.login(process.env.DISCORD_TOKEN);
