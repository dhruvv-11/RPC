const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "discord.io/crnop", 
        state: "1K MEMBER'S SOON", 
        startTimestamp: new Date(), 
        largeImageKey: "small", 
        largeImageText: "Making members",
        smallImageKey: "large", 
        smallImageText: "-D H R U V",
        buttons: [{label : "Channel Link <3" , url : "https://www.youtube.com/c/DGAMINGDhairya/videos"},{label : "Discord Link <3", url : "https://discord.gg/Z6vXdaBXJn"}]
    })

    console.log("puri duniya ko bolo copy that")
})

rpc.login({
    clientId: '774878308172300288'
})