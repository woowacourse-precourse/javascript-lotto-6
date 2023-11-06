import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGenerator {
  constructor() {
    this.LottoNumbers = [];
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(1, 45);
  }

  makeLottoNumber() {
    while (this.LottoNumbers.length < 6) {
      const randomNumber = this.generateRandomNumbers();
      if (!this.LottoNumbers.includes(randomNumber)) {
        this.LottoNumbers.push(randomNumber);
      }
    }
  }
}
