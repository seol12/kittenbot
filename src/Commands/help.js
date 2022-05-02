const {helpembedmessage} = require('../Util/Helpscreen/embed.js');


exports.run = (client, msg, args) => {

  if(args[0]) { 
    return;
  }else {
    const embedmessage = new helpembedmessage().createmessage();
    return msg.channel.send({embed: embedmessage});
  }

};


exports.config = {
  name: '도움말'
};