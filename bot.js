
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDI3ODk0ODE0OTMyMDc0NDk3.DeLY8A.1PwGIfZ5E7CSFc3q0bFnGTD3OZ0);
