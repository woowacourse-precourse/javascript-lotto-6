import { MissionUtils } from '@woowacourse/mission-utils';

export class Lotto {
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
    const numberError = new CommonError();
    numbers.forEach((number) => {
      numberError.numberError(number);
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

export class CommonError {
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
export class LottoMachine {
  constructor() {
    this.lottos = [];
  }

  generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
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
export class CashCount {
  #count;

  constructor(cash) {
    this.#count = 0;
    this.#validate(cash);
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
    this.#count = cash / 1000;
  }

  get count() {
    return this.#count;
  }
}

export class LottoGame {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.playerLottos;
    this.bonusNumber;
    this.winningNumbers;
  }

  async buyLottos() {
    const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    this.playerLottos = this.lottoMachine.buyLottos(Number(cash));
  }

  async winLottos() {
    const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    this.winningNumbers = new Lotto(
      winningNumbers.split(',').map((number) => Number(number)),
    ).numbers;
  }

  async isBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
    this.#bonusNumberValidate(bonusNumber.split(','));
    this.bonusNumber = Number(bonusNumber);
  }

  #bonusNumberValidate(number) {
    this.#validateSingleNumber(number);
    const isNumber = Number(number[0]);
    this.#validateBonusNumber(isNumber);
  }

  #validateSingleNumber(number) {
    if (number.length !== 1) {
      throw new Error('[ERROR] 하나의 입력이 아닙니다.');
    }
  }

  #validateBonusNumber(isNumber) {
    if (this.winningNumbers.includes(isNumber)) {
      throw new Error('[ERROR] 당첨 번호와 중복된 숫자가 있습니다.');
    }

    const numberError = new CommonError();
    numberError.numberError(isNumber);
  }
}

export class LottoStatistics {
  constructor(playerLottos, winningNumbers, bonusNumber) {
    this.playerLottos = playerLottos;
    this.bonusNumber = bonusNumber;
    this.winningNumbers = winningNumbers;
    this.statistics = {
      '3개 일치': { prize: '5,000', count: 0 },
      '4개 일치': { prize: '50,000', count: 0 },
      '5개 일치': { prize: '1,500,000', count: 0 },
      '5개 일치, 보너스 볼 일치': { prize: '30,000,000', count: 0 },
      '6개 일치': { prize: '2,000,000,000', count: 0 },
    };
  }

  calculateStatistics() {
    this.playerLottos.forEach((lotto) => {
      const { count, bonusMatch } = this.countMatchedNumbers(lotto);
      this.updateStatistics(count, bonusMatch);
    });
  }

  countMatchedNumbers(lotto) {
    let count = 0;
    let bonusMatch = false;
    lotto.forEach((number) => {
      if (this.bonusNumber === number) {
        bonusMatch = true;
      }
      if (this.winningNumbers.includes(number)) {
        count += 1;
      }
    });
    return { count, bonusMatch };
  }

  updateStatistics(count, bonusMatch) {
    if (count === 5 && bonusMatch) {
      this.statistics['5개 일치, 보너스 볼 일치'].count += 1;
      return;
    }
    if (this.statistics[`${count}개 일치`]) {
      this.statistics[`${count}개 일치`].count += 1;
    }
  }

  calculateReturnRate(cost) {
    let totalPrize = 0;
    for (const key in this.statistics) {
      totalPrize +=
        Number(this.statistics[key].prize.replaceAll(',', '')) * this.statistics[key].count;
    }
    return (totalPrize / cost) * 100;
  }

  getStatistics() {
    let result = '당첨 통계\n---\n';
    for (const key in this.statistics) {
      result += `${key} (${this.statistics[key].prize}원) - ${this.statistics[key].count}개\n`;
    }
    return result;
  }

  printStatistics() {
    MissionUtils.Console.print(this.getStatistics());
  }
}

export class Start {
  constructor() {
    this.lottoGame = new LottoGame();
  }
  async run() {
    try {
      await this.lottoGame.buyLottos();
      await this.lottoGame.winLottos();
      await this.lottoGame.isBonusNumber();

      const statistics = new LottoStatistics(
        this.lottoGame.playerLottos,
        this.lottoGame.winningNumbers,
        this.lottoGame.bonusNumber,
      );
      statistics.calculateStatistics();
      statistics.printStatistics();
      const rate = statistics.calculateReturnRate(this.lottoGame.playerLottos.length * 1000);
      MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
    } catch (error) {
      throw error;
    }
  }
}
