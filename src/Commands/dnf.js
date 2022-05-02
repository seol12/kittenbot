const {itemsearch} = require('../Util/Dnfitem/item');


exports.run = (client, msg, args) => {
  
  if(args.length >= 1) {
    const itemname = args.join(' ');
    itemsearch(itemname).then((res) => {
      return msg.channel.send({embed: res});
    }).catch((e) => {
      console.error(e);
      if(e.message === 'Not 105Lv or Epic') {
        return msg.channel.send('105제(에픽)만 지원 한다옹');
      }
      if(e.message === '커스텀 픽') {
        return msg.channel.send('커스텀 에픽은 지원 안한다옹');
      }
      return msg.channel.send(`불러올 수 없거나 없는 아이템이라옹`);
    });
  }else {
    msg.channel.send(`아이템 이름을 입력해라옹 \n 예)  !던파 끝을 바라보는 시선`);
  }

};


exports.config = {
  name: '던파'
};