const { SlashCommandBuilder, EmbedBuilder, PresenceUpdateStatus } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('online')
    .setDescription('Pokazuje ilu użytkowników jest online na serwerze'),

  async execute(interaction) {
    await interaction.guild.members.fetch(); // Załaduj wszystkich członków

    const statuses = {
      online: 0,
      idle: 0,
      dnd: 0,
      offline: 0,
    };

    interaction.guild.members.cache.forEach(member => {
      const status = member.presence?.status || 'offline';
      if (statuses[status] !== undefined) {
        statuses[status]++;
      }
    });

    const embed = new EmbedBuilder()
      .setColor('#00bbf7')
      .setTitle(`📶 Statusy użytkowników – ${interaction.guild.name}`)
      .addFields(
        { name: '🟢 Online', value: `${statuses.online}`, inline: true },
        { name: '🌙 Idle', value: `${statuses.idle}`, inline: true },
        { name: '⛔ DND', value: `${statuses.dnd}`, inline: true },
        { name: '⚫ Offline', value: `${statuses.offline}`, inline: true },
      )
      .setFooter({ text: `Łącznie: ${interaction.guild.memberCount} członków` })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
