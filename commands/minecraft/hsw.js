module.exports = {
    commands: ["hsw"],
    minArgs: 1,
    expectedArgs: "<username>",
    callback(message, arguments, text){
        message.channel.send(`https://plancke.io/hypixel/player/stats/${arguments[0]}#SkyWars.`);
    }
}