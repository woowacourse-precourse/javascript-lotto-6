import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGenerator {
  constructor() {
    this.LottoNumbers = [];
  }

  generateRandomNumbers() {
    this.LottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.LottoNumbers;
  }


  makeLottoNumber() {
    while (this.LottoNumbers.length < 6) {
      const randomNumber = this.generateRandomNumbers();
      if (!this.LottoNumbers.includes(randomNumber)) {
        this.LottoNumbers.push(randomNumber);
      }
    }
  }

  purchaseLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(this.generateRandomNumbers()); // 각 로또 번호를 Lotto 클래스로 감싸서 생성
      lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
      // 복사하여 새로운 로또 번호 배열 생성
    }
    return lottos;
  }
}
export default LottoGenerator;