module.exports = {
    commands: ["hbw"],
    minArgs: 1,
    expectedArgs: "<username>",
    callback(message, arguments, text){
        message.channel.send(`https://plancke.io/hypixel/player/stats/${arguments[0]}#BedWars.`);
    }
}