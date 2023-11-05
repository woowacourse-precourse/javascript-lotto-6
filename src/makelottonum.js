import { Console, MissionUtils } from '@woowacourse/mission-utils';
// import NumOfBuy from './numofbuy.js';

class MakeLottoNum {
  // #numOfBuy;

  // constructor() {
  //  this.#numOfBuy = new NumOfBuy();
  // }

  // 랜덤 로또 번호 생성 함수 (반복되어야 함)
  #makeLottoNum() {
    const NEED_NUM = 6;
    const myLottoNum = [];
    while (myLottoNum.length < NEED_NUM) {
      const pick = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!myLottoNum.includes(pick)) {
        myLottoNum.push(pick); // 일단 이 배열은 정렬 안되어 있음. 하지만 숫자상태
      }
    }
    const sortLottoNum = myLottoNum.sort((a, b) => a - b);
    // MissionUtils.Console.print(myLottoNum.sort((a, b) => a - b)); // 정렬되었지만 숫자형태 다른함수로 뺄거임.
    Console.print(sortLottoNum);

    return sortLottoNum;
  }

  async makeArrayOfLottoNum(numOfBuy) {
    // const numOfBuy = await this.#numOfBuy.run();
    const arrayofLotto = [];
    while (arrayofLotto.length < numOfBuy) {
      arrayofLotto.push(this.#makeLottoNum());
    }

    return arrayofLotto;
  }
}

export default MakeLottoNum;

// const run = new MakeLottoNum();
// run.makeArrayOfLottoNum();
