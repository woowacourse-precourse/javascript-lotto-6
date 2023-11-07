import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGenerator {
  constructor() {
    // 생성자에서는 빈 배열만 초기화합니다.
    this.LottoNumbers = [];
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(1, 45);
  }

  makeLottoNumber() {
    // 로또 번호 배열은 이 메서드 내에서만 사용됩니다.
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
      const randomNumber = this.generateRandomNumbers();
      if (!lottoNumbers.includes(randomNumber)) {
        lottoNumbers.push(randomNumber);
      }
    }
    // 생성된 로또 번호를 오름차순 정렬하여 반환합니다.
    return lottoNumbers.sort((a, b) => a - b);
  }

  purchaseLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(this.makeLottoNumber()); // 각 로또 번호를 Lotto 클래스로 감싸서 생성
      lottos.push(lotto);
      Console.print(lotto.getNumbers()); // 복사하여 새로운 로또 번호 배열 생성
    }
    return lottos;
  }
}
export default LottoGenerator;
