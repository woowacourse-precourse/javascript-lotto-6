import LottoGame from "../src/domain/LottoGame";
import SETTINGS from "../src/constants/settings";
import MESSAGES from "../src/constants/messages";

describe("lottoGame 테스트", () => {
  let lottoGame;

  describe("사용자 입력 처리 메서드", () => {
    test("사용자가 입력한 로또 구매 금액을 설정하고 가져오기", () => {
      const price = 10000;
      lottoGame = new LottoGame(price);

      expect(lottoGame.getPrice()).toBe(price);
    });

    test("사용자가 입력한 당첨 번호를 설정하고 가져오기", () => {
      const numbers = [3, 7, 12, 18, 22, 45];

      lottoGame.setTargetNumbers(numbers);

      expect(lottoGame.getTargetNumbers()).toEqual(numbers);
    });

    test("사용자가 입력한 당첨 번호가 중복된 경우 예외 처리", () => {
      const invalidNumbers = [1, 2, 3, 4, 5, 5];

      expect(() => lottoGame.validateTargetNumbers(invalidNumbers)).toThrow(
        MESSAGES.error.notDuplicateTargetNumbers
      );
    });

    test("사용자가 입력한 당첨 번호 중 범위를 벗어나는 번호가 있는 경우 예외 처리", () => {
      const invalidNumber = SETTINGS.targetNumber.maximum * 2;
      const invalidNumbers = [1, 2, 3, 4, 5, invalidNumber];

      expect(() => lottoGame.validateTargetNumbers(invalidNumbers)).toThrow(
        MESSAGES.error.invalidRange
      );
    });

    test("사용자가 입력한 당첨 번호가 유효한 경우 검증 통과", () => {
      const numbers = [10, 15, 20, 25, 30, 35];

      expect(() => lottoGame.validateTargetNumbers(numbers)).not.toThrow();
    });

    test("사용자가 입력한 보너스 번호가 범위를 벗어날 경우 예외 처리", () => {
      const number = SETTINGS.targetNumber.maximum * 2;

      expect(() => lottoGame.validateBonusNumbers(number)).toThrowError(
        MESSAGES.error.invalidRange
      );
    });

    test("사용자가 입력한 보너스가 번호가 이미 당첨 번호에 있는 번호인 경우 예외 처리", () => {
      const numbers = [10, 15, 20, 25, 30, 35];
      const number = 25;

      lottoGame.setTargetNumbers(numbers);

      expect(() => lottoGame.validateBonusNumbers(number)).toThrowError(
        MESSAGES.error.notDuplicateTargetNumbers
      );
    });

    test("사용자가 입력한  보너스 번호가 유효한 경우 검증 통과", () => {
      const numbers = [10, 15, 20, 25, 30, 35];
      const number = 42;

      lottoGame.setTargetNumbers(numbers);

      expect(() => lottoGame.validateBonusNumbers(number)).not.toThrow();
    });
  });

  describe("get 메서드", () => {
    test("lottoGame은 올바른 price, count 값을 반환한다.", () => {
      const price = 1000;
      const lottoGame = new LottoGame(price);

      expect(lottoGame.getPrice()).toEqual(price);
      expect(lottoGame.getCount()).toEqual(price / SETTINGS.priceUnit);
    });
  });

  describe("calculateCorrect 메서드", () => {
    const lottoGame = new LottoGame(1000);
    const cases = [
      { userNumbers: [1, 2, 3, 4, 5, 6], expected: 6 },
      { userNumbers: [1, 2, 3, 4, 5, 7], expected: 5 },
      { userNumbers: [1, 2, 3, 4, 7, 8], expected: 4 },
      { userNumbers: [1, 2, 3, 7, 8, 9], expected: 3 },
      { userNumbers: [1, 2, 7, 8, 9, 10], expected: 2 },
    ];
    const targetNumbers = [1, 2, 3, 4, 5, 6];

    lottoGame.setTargetNumbers(targetNumbers);

    test.each(cases)(
      "주어진 사용자 로또 번호와 일치하는 당첨 번호의 개수를 반환합니다",
      ({ userNumbers, expected }) => {
        const target = lottoGame.calculateCorrect(userNumbers)[0];
        expect(target).toEqual(expected);
      }
    );
  });

  describe("addCount 메서드", () => {
    test("수익을 계산할 때 올바른 결과를 반환해야 합니다", () => {
      const dummyResult = [0, 5, 3, 2, 1, 0];

      dummyResult.forEach((count, prize) => {
        for (let i = 0; i < count; i++) {
          lottoGame.addCount(prize);
        }
      });
      lottoGame.setIncome();

      const expectedIncome =
        dummyResult[1] * SETTINGS.income.first +
        dummyResult[2] * SETTINGS.income.second +
        dummyResult[3] * SETTINGS.income.third +
        dummyResult[4] * SETTINGS.income.fourth +
        dummyResult[5] * SETTINGS.income.fifth;
      expect(lottoGame.getIncome()).toBe(expectedIncome);
    });
  });
});
