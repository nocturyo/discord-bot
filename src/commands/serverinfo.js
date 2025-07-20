const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Pokazuje informacje o tym serwerze'),

  async execute(interaction) {
    const { guild } = interaction;

    const owner = await guild.fetchOwner();

    const embed = new EmbedBuilder()
      .setColor('#00bbf7')
      .setTitle(`🏠 Informacje o serwerze: ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: '👑 Właściciel', value: `${owner.user.tag}`, inline: true },
        { name: '🆔 ID Serwera', value: `${guild.id}`, inline: true },
        { name: '📅 Założony', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`, inline: false },
        { name: '👥 Członkowie', value: `${guild.memberCount}`, inline: true },
        { name: '💬 Kanały', value: `${guild.channels.cache.size}`, inline: true },
        { name: '💎 Boosty', value: `${guild.premiumSubscriptionCount || 0}`, inline: true }
      )
      .setFooter({ text: `Informacje dla: ${interaction.user.username}` })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
