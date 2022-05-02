const axios = require('axios');
const {Covidliveembedmessage} = require('./embed');

exports.live = () => {
  
  const unixtime = new Date().getTime();
  const confirmedcase = axios.get(`https://apiv3.corona-live.com/domestic/live.json?timestamp=${unixtime}`);
  const patient  = axios.get(`https://apiv3.corona-live.com/domestic/stat.json?timestamp=${unixtime}`);
  return Promise.allSettled([confirmedcase, patient]).then((res) => {
    const embedmessage = new Covidliveembedmessage(res[0].value.data.live, res[1].value.data.overview);
    return embedmessage.createmessage();
  }).catch((e) => {
    throw new Error(`${e}`);
  });

};