const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Sprawdza opóźnienie bota!'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pong!', fetchReply: true });
    interaction.editReply(`🏓 Opóźnienie: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};
