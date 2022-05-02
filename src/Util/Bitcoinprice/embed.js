

exports.Coinsembedmessage = class {

  constructor(coins) {

    this.coins = coins;
    this.date = new Date();

  };
  createmessage() {

    return {
      color: 0x093687,
      title: `업비트`,
      description:`현재시간 ${this.date.getFullYear()}년 ${this.date.getMonth() + 1}월 ${this.date.getDate()}일 ${this.date.toLocaleTimeString('ko-KR')} 기준`,
      fields: [
        {
          name: `${this.coins[0].korean_name}`,
          value: `${this.coins[0].trade_price}원`
        },
        {
          name: `${this.coins[1].korean_name}`,
          value: `${this.coins[1].trade_price}원`
        },
        {
          name: `${this.coins[2].korean_name}`,
          value: `${this.coins[2].trade_price}원`
        },
        {
          name: `${this.coins[3].korean_name}`,
          value: `${this.coins[3].trade_price}원`
        },
        {
          name: `${this.coins[4].korean_name}`,
          value: `${this.coins[4].trade_price}원`
        },
        {
          name: `${this.coins[5].korean_name}`,
          value: `${this.coins[5].trade_price}원`
        }
      ]
    }

  };
   
};

exports.Coinembedmessage = class {

  constructor(coin) {

    this.coin = coin;
    this.date = new Date();

  };
  createmessage() {

    return {
      color: 0x093687,
      title: `업비트`,
      description:`현재시간 ${this.date.getFullYear()}년 ${this.date.getMonth() + 1}월 ${this.date.getDate()}일 ${this.date.toLocaleTimeString('ko-KR')} 기준`,
      fields: [
        {
          name: `${this.coin.korean_name}`,
          value: `${this.coin.trade_price}원`  
        }
      ]
    }

  };

};