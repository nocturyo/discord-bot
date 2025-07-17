require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');

const commands = [];
const commandsPath = path.join(__dirname, 'src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Zamień to na swój CLIENT_ID i GUILD_ID
const CLIENT_ID = '1395483350445064404';
const GUILD_ID = '1304156913046388867';

(async () => {
  try {
    console.log('🔁 Rejestruję slash komendy...');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('✅ Komendy zarejestrowane!');
  } catch (error) {
    console.error(error);
  }
})();
