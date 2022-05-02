


exports.helpembedmessage = class {

  constructor() {
  };
  createmessage() {

    return {
      color: 0xfb7adc,
      title: '안녕 나는 KITTEN - BOT',
      description: '나는 이정도 일을 할 수 있다옹',
      thumbnail: {
        url: 'https://i.imgur.com/jTNy0th.gif'
      },
      fields: [
        {
          name: '로또',
          value: '`!로또`'
        },
        {
          name: '비트코인 시세',
          value: '`!업비트,` `!업비트 (코인 이름) `',
        },
        {
          name: '코로나 실시간 확진자 수',
          value: '`!코로나`'
        },
        {
          name: '던파 아이템 검색',
          value: '`!던파 (아이템 이름)`'
        }
      ],
      footer: {
        text: '기능 추가 등등 문의는 정진규#7783으로 DM 보내주라옹',
        icon_url:'https://cdn.discordapp.com/app-icons/959431840911986778/8e360f175ae340090eeba50b63d10cdc.png?size=256'
      }
    }
    
  };
 
};