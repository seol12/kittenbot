const {coins, selectedcoin} = require('../Util/Bitcoinprice/bitcoin');


exports.run = (client, msg, args) => {

  if(args.length > 1) {
    return msg.channel.send('하나만 입력해라옹');
  }
  if(args[0]) {
    selectedcoin(args[0]).then((res) => {
      return msg.channel.send({embed: res});
    }).catch((e) => {
      console.error(e);
      return msg.channel.send('존재하지 않는 코인이다옹');
    });
  }else {
    coins().then((res) => {
      return msg.channel.send({embed: res});
    }).catch((e) => {
      console.error(e);
      return msg.channel.send('정보를 불러 올 수 없다옹');
    });
  }

};
 

exports.config = {
  name:'업비트'
};