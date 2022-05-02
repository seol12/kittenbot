const dotenv = require('dotenv');
const fs = require('fs');
const Discord = require('discord.js');


dotenv.config();
const Runningcat = process.env.NODE_ENV === 'Runningcat';


if(Runningcat) {
  const client = new Discord.Client();
  client.commands = new Discord.Collection(); 
  const mark = '!';
  client.commands.load = (directory) => {

    for(const file of fs.readdirSync(directory)) {
      const cmdfile = require(`./Commands/${file}`);
      client.commands.set(cmdfile.config.name, cmdfile);
    }

  };
  client.commands.load(__dirname + "/Commands");
  client.on('ready', () => {

    console.log('건설냥이 준비완료');

  });
  client.on('message', (msg) => {

    if(!msg.content.startsWith(mark)) {
      return;
    }
    const args = msg.content.slice(1).split(/ +/g);
    const command = args.shift().toLowerCase();
    const entry = client.commands.get(command);
    if(entry) {
      entry.run(client, msg, args) 
    };

  });
  client.login(process.env.TOKEN);
}else {
  console.log('dev캣 실행중');
};
