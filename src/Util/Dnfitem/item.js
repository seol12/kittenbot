const axios = require('axios');
const {Dnfitemembedmessage }= require('./embed');


exports.itemsearch = async(args) => {

  try {
    const searchitem = await axios.get(`https://api.neople.co.kr/df/items?itemName=${encodeURIComponent(args)}&apikey=${process.env.DNF}`);
    if(searchitem.data.rows.length === 0) {
      throw 'no data'
    }
    if(searchitem.data.rows[0].itemRarity != '에픽' || searchitem.data.rows[0].itemAvailableLevel != 105) {
      throw 'Not 105Lv or Epic'
    }
    if(searchitem.data.rows[0].itemName.match(/^(블루 베릴)|(엔트 정령)|(숲속의 마녀)/g)) {
      throw '커스텀 픽'
    }
    const itemname = searchitem.data.rows[0].itemId;
    const itemdetail = await axios.get(`https://api.neople.co.kr/df/items/${itemname}?apikey=${process.env.DNF}`);
    const obtain = itemdetail.data.itemObtainInfo;
    const droptable = obtain.match(/(?<=\* 다음 던전 획득\s+).*?(?=\s+(\* 다음 지역 및 던전 업적 보상으로 획득)|(\* 다음 던전 업적 보상으로 획득))/gs) || obtain.match(/(?<=\* 다음 지역 및 던전 업적 보상으로 획득\s+).+/gs).join(' ');
    const embedmessage = new Dnfitemembedmessage(itemdetail.data, itemname, droptable);
    return embedmessage.createmessage();
  }catch(e) {
    throw new Error(`${e}`);
  }
 
};