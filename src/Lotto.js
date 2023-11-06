import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

//로또 번호 생성
class LottoMachine {
  constructor() {
    this.lottos = [];
  }

  generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lottos.push(lotto);
    MissionUtils.Console.print(lotto);
  }

  buyLottos(cash) {
    const cashCount = new CashCount(cash).count;
    MissionUtils.Console.print(`${cashCount}개를 구매했습니다.`);
    for (let count = 1; count <= cashCount; count++) {
      this.generateLotto();
    }

    return this.lottos;
  }
}

// 현금->횟수
class CashCount {
  #count;

  constructor(cash) {
    this.#validate(cash);
    this.#count = cash / 1000;
  }

  #validate(cash) {
    if (isNaN(cash)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (cash < 1000) {
      throw new Error('[ERROR] 금액이 부족합니다.');
    }
    if (cash % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  }

  get count() {
    return this.#count;
  }
}

class LottoGame {
  constructor() {
    this.playerLottos = [];
  }

  async buyLottos() {
    const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요');
    const lottoMachine = new LottoMachine();
    this.playerLottos = await lottoMachine.buyLottos(Number(cash));
  }

  start() {
    this.buyLottos();
  }
}

export default Lotto;
