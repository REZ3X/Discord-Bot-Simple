const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // To use .env for token storage

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Truth and Dare Questions
const truths = [
    "What's the most embarrassing thing you've ever done?",
    "What's a secret you've never told anyone?",
    "Have you ever had a crush on someone in this server?",
    "What's your most irrational fear?",
    "Who in this server would you trade lives with for a day?"
];

const dares = [
    "Send a DM to someone in this server and confess your love!",
    // Add more dares here
];

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content === '!truth') {
        if (truths.length === 0) {
            message.channel.send("No truth questions available.");
        } else {
            const truth = truths[Math.floor(Math.random() * truths.length)];
            message.channel.send(`Truth: ${truth}`);
        }
    }

    if (content === '!dare') {
        if (dares.length === 0) {
            message.channel.send("No dare challenges available.");
        } else {
            const dare = dares[Math.floor(Math.random() * dares.length)];
            message.channel.send(`Dare: ${dare}`);
        }
    }

    if (content === '!todhelp') {
        message.channel.send(`
**Truth or Dare Bot Commands:**
- \`!truth\` - Get a random truth question.
- \`!dare\` - Get a random dare challenge.
- \`!todhelp\` - Display this help message.
`);
    }
});

client.login(process.env.BOT_TOKEN);