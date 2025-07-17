module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`❌ Błąd przy wykonywaniu komendy /${interaction.commandName}:`, error);
      await interaction.reply({
        content: '❌ Wystąpił błąd przy wykonywaniu tej komendy.',
        ephemeral: true,
      });
    }
  },
};
