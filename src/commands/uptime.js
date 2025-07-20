const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Pokazuje czas działania bota'),

  async execute(interaction) {
    const totalSeconds = Math.floor(process.uptime());
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const embed = new EmbedBuilder()
      .setColor('#00bbf7')
      .setTitle('⏱️ Uptime')
      .setDescription(`Bot działa od: **${hours}h ${minutes}m ${seconds}s**`)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
