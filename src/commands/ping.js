const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Sprawdź opóźnienie bota'),

  async execute(interaction) {
    const latency = Date.now() - interaction.createdTimestamp;

    const embed = new EmbedBuilder()
      .setColor('#00bbf7')
      .setTitle('🏓 Pong!')
      .setDescription(`Opóźnienie bota to **${latency}ms**.`)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
