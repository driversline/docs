COMMAND_NAME() {
  node -e "const { status } = require('minecraft-server-util'); status('SERVER_IP', 25565).then(result => console.log('\033[1m[ ~ ] >> Онлайн: ' + result.players.online + ' / ' + result.players.max + '\n[ ~ ] >> Версия: ' + result.version.name + '\n[ ~ ] >> Пинг: ' + result.roundTripLatency + 'ms\033[0m')).catch(err => console.log('\033[1m[ ~ ] >> Ожидание..\033[0m'))"
}
