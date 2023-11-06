/* eslint-disable class-methods-use-this */
import { Console, MissionUtils } from '@woowacourse/mission-utils';

class MakeLottoNum {
  // 랜덤 로또 번호 생성 함수 (반복되어야 함)
  #makeLottoNum() {
    const myLottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    const sortLottoNum = myLottoNum.sort((a, b) => a - b);
    // jest 테스트 형식에 맞춰 출력하기 위해 문자열 형식으로 변경
    const lottoNumtoString = `[${sortLottoNum.join(', ')}]`;
    Console.print(lottoNumtoString);

    return sortLottoNum;
  }

  async makeArrayOfLottoNum(numOfBuy) {
    const arrayofLotto = [];
    while (arrayofLotto.length < numOfBuy) {
      const makedLottoNUm = this.#makeLottoNum();
      arrayofLotto.push(makedLottoNUm);
    }

    return arrayofLotto;
  }
}

export default MakeLottoNum;
