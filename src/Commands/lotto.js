

exports.run = (client, msg, args) => {

  let numbers = [];
  let draw = new Array(45).fill().map((v,i) => { return i + 1; });
  while(numbers.length < 6) {
    numbers.push(draw.splice(Math.floor(Math.random() * draw.length + 1),1)[0]);
  }
  const luckynumbers = numbers.join(', ');
  msg.channel.send(`고양이가 고른 번호는 ${luckynumbers} 이다옹`);
  
};


exports.config = {
  name: '로또'
};