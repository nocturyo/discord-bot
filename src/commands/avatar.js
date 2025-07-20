const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Wyświetla avatar wskazanego użytkownika')
    .addUserOption(option =>
      option.setName('użytkownik')
        .setDescription('Użytkownik, którego avatar chcesz zobaczyć')
        .setRequired(false)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser('użytkownik') || interaction.user;

    const avatarEmbed = new EmbedBuilder()
      .setColor('#00bbf7')
      .setTitle(`🖼️ Avatar użytkownika ${user.username}`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setFooter({ text: `ID: ${user.id}` })
      .setTimestamp();

    await interaction.reply({ embeds: [avatarEmbed] });
  },
};
