const axios = require('axios');
const {Coinsembedmessage, Coinembedmessage} = require('./embed.js');


exports.comma = (price) => {
  
  let answer = '';
  let count = 0;
  while(price > 0) {
    const split = price % 10;
    price = Math.floor(price / 10);
    if(count != 0 && count % 3 === 0) {
      answer = `,${answer}`;
    }
    answer = `${split}${answer}`;
    count ++;
  }
  return answer;
  
};

exports.koreanname = (market, marketname) => {

  const krw = market.filter((v,i) => { return v.market.includes('KRW')});
  const krname = krw.find((v,i) =>{ return v.market === marketname }).korean_name;
  return krname;

};

exports.coins = () => {

  const markets = axios.get('https://api.upbit.com/v1/market/all');
  const price = axios.get('https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP,KRW-ADA,KRW-SOL,KRW-DOGE');
  return Promise.allSettled([markets, price]).then((res) => {
    const coins = res[1].value.data.map((v,i) => {
      return {
        market : v.market,
        korean_name: this.koreanname(res[0].value.data, v.market),
        trade_price: this.comma(v.trade_price)
        }
      });
      const embedmessage =  new Coinsembedmessage(coins);
      return embedmessage.createmessage();
  }).catch((e) => {
      throw new Error(`${e}`);
  });
   
};

exports.selectedcoin = async(args) => {

  try {
    const markets = await axios.get('https://api.upbit.com/v1/market/all');
    const filterkrwcoin = markets.data.filter((v,i) => {
      return v.market.includes('KRW')}).find((v,i) => {
        return v.korean_name === args
    });
    if(!filterkrwcoin) {
      throw 'no data';
    }
    const onecoin = await axios.get(`https://api.upbit.com/v1/ticker?markets=${filterkrwcoin.market}`);
    const coin = {
      market: filterkrwcoin.market,
      korean_name: filterkrwcoin.korean_name,
      trade_price: this.comma(onecoin.data[0].trade_price)
    }
    const embedmessage = new Coinembedmessage(coin);
    return embedmessage.createmessage();
  }catch(e) {
    throw new Error(`${e}`);
  }

};
