const {live} = require('../Util/Covidlive/live');


exports.run = (client, msg, args ) => {
 
  if(args.length === 0) {
    live().then((res) => {
      return msg.channel.send({embed: res});
    }).catch((e) => {
      console.error(e);
      return msg.channel.send('정보를 불러올 수 없다옹');
    });
  }else {
    return;
  }

};


exports.config = {
  name: '코로나'
};