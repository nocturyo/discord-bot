module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`✅ Zalogowano jako ${client.user.tag}`);

    const guild = client.guilds.cache.first(); // pobiera pierwszy serwer

    if (!guild) {
      console.log("❌ Bot nie jest na żadnym serwerze!");
      return;
    }

    setInterval(async () => {
      await guild.members.fetch(); // odśwież listę członków

      const totalMembers = guild.memberCount;

      client.user.setActivity(`👀 ${totalMembers} użytkowników`, {
        type: 3, // 3 = "WATCHING"
      });
    }, 10000); // co 10 sekund
  },
};
