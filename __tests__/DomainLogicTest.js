import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto';
import LottoGenerator from '../src/LottoGenerator';
import App from '../src/App';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe("LottoGenerator 클래스 도메인 로직 테스트", () => {
  let lottoGenerator;

  beforeEach(() => {
    const purchaseAmount = 5000;
    lottoGenerator = new LottoGenerator(purchaseAmount);
  })

  test("calculateNumberOfLottos 메서드로 로또 구입 수를 1000원 단위로 계산하는지 확인", () => {
    expect(lottoGenerator.calculateNumberOfLottos()).toEqual(5);
  })

  test("generateLottos 메서드가 로또 구입 수만큼 element 수를 생성하는지 확인", () => {
    expect(lottoGenerator.generateLottos().length).toEqual(5);
  });

  test("generateLottos 메서드가 생성한 element가 모두 로또 번호인지 확인", () => {
    const lottos = lottoGenerator.generateLottos();

    expect(lottos.every(lotto => lotto instanceof Lotto)).toBeTruthy();
  });
});

describe("App 클래스 도메인 로직 테스트", () => {
  let app;

  beforeEach(async () => {
    jest.restoreAllMocks();
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 6, 8, 9]
    ]);
    mockQuestions(["6000", "1,2,3,4,5,6", "7"]);

    app = new App();
    app.play();
  })

  test("checkResult 메서드가 맞는 결과를 계산하는지 확인", async () => {
    const result = {
      fifthPlaceWin: 1,
      fourthPlaceWin: 2,
      thirdPlaceWin: 1,
      secondPlaceWin: 1,
      firstPlaceWin: 1,
    };

    //console.log("checkResult test", app.getLottos());

    expect(app.checkResult()).toEqual(result);
  });

  test("checkIncomePercentage 메서드가 맞는 수익률을 계산하는지 확인", async () => {
    const incomePercentage =
      (
        5000 * 1 +
        50000 * 2 +
        1500000 * 1 +
        30000000 * 1 +
        2000000000 * 1
      ) / 6000 * 100;

    expect(app.calculateIncomePercentage("6000")).toEqual(incomePercentage);
  });
});

describe("Lotto 클래스 도메인 로직 테스트", () => {
  let lotto;
  let drawnLotto;
  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    drawnLotto = {
      numbers: ["1", "2", "3", "4", "5", "7"],
      bonusNumber: "6",
    };
  })

  test("checkMatchingNumbers 메서드가 당첨된 번호의 갯수를 계산하는지 확인", () => {
    expect(lotto.checkMatchCount(drawnLotto)).toEqual(5);
  });

  test("checkMatchingBonus 메서드가 보너스 볼의 당첨 유무를 확인하는지 확인", () => {
    expect(lotto.checkMatchingBonus(drawnLotto)).toBeTruthy();
  });
});