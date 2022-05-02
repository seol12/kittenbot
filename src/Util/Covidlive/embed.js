

exports.Covidliveembedmessage = class {

  constructor(confirmedcase, patient) {

    this.date = new Date();
    this.today = confirmedcase.today;
    this.yesterday = confirmedcase.yesterday;
    this.critical = patient.confirmedCritical;
    this.deceased = patient.deceased;

  };
  comma(people) {

    let answer = '';
    let count = 0;
    while(people > 0) {
      const split = people % 10;
      people = Math.floor(people / 10);
      if(count != 0 && count % 3 === 0) {
        answer = `,${answer}`;
      }
      answer = `${split}${answer}`;
      count ++;
    }
    return answer;

  };
  createmessage() {

    return {
      title: '코로나 확진자 정보',
      color: '0x2495ff',
      description: `현재시간 ${this.date.getFullYear()}년 ${this.date.getMonth() + 1}월 ${this.date.getDate()}일 ${this.date.toLocaleTimeString('ko-KR')} 기준`,
      fields: [
        {
          name: '현재 확진자 수',
          value: `${this.today > this.yesterday ? `${this.comma(this.today)}명 (동시간 대비 ${this.comma(this.today - this.yesterday)}명 증가)` 
              : `${this.comma(this.today)}명 (동시간 대비 ${this.comma(this.yesterday - this.today)}명 감소)`
            }`
        },
        {
          name: '어제 총 확진자 수',
          value: `${this.comma(this.yesterday)}명`
        },
        {
          name: '총 위중증자 수',
          value: `${this.comma(this.critical[0])}명`
        },
        {
          name: '총 사망자 수',
          value: `${this.comma(this.deceased[0])}명`
        }
      ]
    }

  };

};