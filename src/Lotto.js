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
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error('[ERROR] 중복 숫자가 있습니다.');
    }
    numbers.forEach((number) => {
      const isNumber = Number(number);
      const numberError = new CommonError();
      numberError.numberError(isNumber);
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

class CommonError {
  numberError(isNumber) {
    if (isNaN(isNumber)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (isNumber < 1 || isNumber > 45) {
      throw new Error('[ERROR] 1~45 숫자가 아닙니다.');
    }
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
    this.bonusNumber = 0;
    this.winningNumbers = [];
  }

  async buyLottos() {
    const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요');
    const lottoMachine = new LottoMachine();
    this.playerLottos = await lottoMachine.buyLottos(Number(cash));
  }
  async winLottos() {
    const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요');
    this.winningNumbers = new Lotto(winningNumbers.split(',')).numbers;
  }
  async isBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요');
    this.#bonusNumberValidate(bonusNumber.split(','));
    this.bonusNumber = Number(bonusNumber);
  }

  #bonusNumberValidate(number) {
    if (number.length !== 1) {
      throw new Error('[ERROR] 하나의 입력이 아닙니다.');
    }
    const isNumber = Number(number[0]);
    const numberError = new CommonError();
    numberError.numberError(isNumber);
  }

  async start() {
    this.buyLottos();
    this.winLottos();
    this.isBonusNumber();
  }
}

export default Lotto;
