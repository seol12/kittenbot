

exports.Dnfitemembedmessage = class {

  constructor(item, itemimage, droptable) {

    this.item = item;
    this.itemimage = itemimage;
    this.itemStatus = item.itemStatus;
    this.growInfo = item.growInfo;
    this.droptable = droptable;

  };
  pushstatus() {

    const filters = ['물리 방어력', '마법 방어력', '마법 크리티컬 히트', '물리 크리티컬 히트', '적중률', '캐스트속도', '이동속도', '무게', '내구도'];
    let answer = '';
    this.itemStatus.forEach((v,i) => {
      if(!filters.includes(v.name)) {
        answer += `${v.name}: ${v.value} \n`
      }
    });
    return answer;

  };
  createmessage() {

    return {
      color: 0xf07714,
      title: `${this.item.itemName}`,
      thumbnail: {
        url: `https://img-api.neople.co.kr/df/items/${this.item.itemId}`
      },
      fields: [
        {
          name: `분류`,
          value: `레어리티: ${this.item.itemRarity}
          레벨제한: ${this.item.itemAvailableLevel}
          타입: ${this.item.itemTypeDetail}`
        },
        {
          name: '능력치',
          value: `${this.pushstatus()}`
        },
        {
          name: '장비옵션',
          value: `${this.item.itemExplain}`
        },
        {
          name: '버퍼 전용 옵션',
          value: `${this.item.itemBuff ? this.item.itemBuff.explain : '\u200b'}`
        },
        {
          name: '성장 옵션',
          value: `${this.growInfo.total.buff ? `성장 옵션 총 피해 증가 ${this.growInfo.total.damage} 
          성장 옵션 총 버프력 ${this.growInfo.total.buff}` :`성장 옵션 총 피해 증가 ${this.growInfo.total.damage}`}`
        },
        {
          name: `1옵션 - Lv ${this.growInfo.options[0].level}`,
          value: `${this.growInfo.options[0].buff ? `피해 증가 ${this.growInfo.options[0].damage}
          버프력 ${this.growInfo.options[0].buff}
          
          ${this.growInfo.options[0].explain}`
          : `피해 증가 ${this.growInfo.options[0].damage}
          
          ${this.growInfo.options[0].explain}`}`,
          inline : true    
        },
        {
          name: `2옵션 - Lv ${this.growInfo.options[1].level}`,
          value: `${this.growInfo.options[1].buff ? `피해 증가 ${this.growInfo.options[1].damage}
          버프력 ${this.growInfo.options[1].buff}
          
          ${this.growInfo.options[1].explain}`
          : `피해 증가 ${this.growInfo.options[1].damage}
          
          ${this.growInfo.options[1].explain}`}`,
          inline : true   
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: `3옵션 - Lv ${this.growInfo.options[2].level}`,
          value: `${this.growInfo.options[2].buff ? `피해 증가 ${this.growInfo.options[2].damage}
          버프력 ${this.growInfo.options[2].buff}
          
          ${this.growInfo.options[2].explain}`
          : `피해 증가 ${this.growInfo.options[2].damage}
          
          ${this.growInfo.options[2].explain}`}`,
          inline : true,
        },
        {
          name: `4옵션 - Lv ${this.growInfo.options[3].level}`,
          value: `${this.growInfo.options[3].buff ? `피해 증가 ${this.growInfo.options[3].damage}
          버프력 ${this.growInfo.options[3].buff}
          
          ${this.growInfo.options[3].explain}`
          : `피해 증가 ${this.growInfo.options[3].damage}
          
          ${this.growInfo.options[3].explain}`}`,
          inline: true,
        },
        {
          name: '획득처',
          value: `${this.droptable}`
        }
      ]
    }
    
  };
  
};