import LottoModel from "../src/model/LottoModel";
import SETTINGS from "../src/constants/settings";
import MESSAGES from "../src/constants/messages";

describe("LottoModel 테스트", () => {
  describe("로또 구매 금액 설정 및 가져오기", () => {
    test("로또 구매 금액을 설정하고 가져오기", () => {
      const totalPrice = 10000;
      const lottoModel = new LottoModel(totalPrice);

      expect(lottoModel.getPrice()).toBe(totalPrice);
    });
  });

  describe("당첨 번호 설정 및 가져오기", () => {
    test("사용자가 설정한 당첨 번호 테스트", () => {
      const lottoModel = new LottoModel(10000);
      const targetNumbers = [3, 7, 12, 18, 22, 45];

      lottoModel.setTargetNumbers(targetNumbers);

      expect(lottoModel.getTargetNumbers()).toEqual(targetNumbers);
    });

    test("중복된 당첨 번호 입력인 경우 예외 처리", () => {
      const lottoModel = new LottoModel(10000);
      const invalidNumbers = [1, 2, 3, 4, 5, 5];

      expect(() => lottoModel.validateTargetNumbers(invalidNumbers)).toThrow(
        MESSAGES.error.notDuplicateTargetNumbers
      );
    });
  });

  describe("수익 계산 테스트", () => {
    test("수익을 계산할 때 올바른 결과 반환", () => {
      const lottoModel = new LottoModel(10000);
      const result = [0, 5, 3, 2, 1, 0];
      for (let prize = 1; prize < SETTINGS.targetNumber.count; prize++) {
        for (let i = 0; i < result[prize]; i++) {
          lottoModel.addResult(prize);
        }
      }
      const expectedIncome =
        result[1] * SETTINGS.income.first +
        result[2] * SETTINGS.income.second +
        result[3] * SETTINGS.income.third +
        result[4] * SETTINGS.income.fourth +
        result[5] * SETTINGS.income.fifth;

      lottoModel.setIncome();

      expect(lottoModel.getIncome()).toBe(expectedIncome);
    });
  });

  describe("보너스 번호 테스트", () => {
    test("유효한 보너스 번호인 경우 검증 통과", () => {
      const lottoModel = new LottoModel(10000);
      const targetNumbers = [10, 15, 20, 25, 30, 35];
      const number = 42;

      lottoModel.setTargetNumbers(targetNumbers);

      expect(() => lottoModel.validateBonusNumbers(number)).not.toThrow();
    });

    test("범위를 벗어나는 번호인 경우 예외 처리", () => {
      const lottoModel = new LottoModel(10000);
      const number = SETTINGS.targetNumber.maximum * 2;

      expect(() => lottoModel.validateBonusNumbers(number)).toThrowError(
        MESSAGES.error.invalidRange
      );
    });

    test("이미 로또 번호에 있는 번호인 경우 예외 처리", () => {
      const lottoModel = new LottoModel(10000);
      const targetNumbers = [10, 15, 20, 25, 30, 35];
      const number = 25;
      lottoModel.setTargetNumbers(targetNumbers);

      expect(() => lottoModel.validateBonusNumbers(number)).toThrowError(
        MESSAGES.error.notDuplicateTargetNumbers
      );
    });
  });

  describe("로또 번호 테스트", () => {
    const lottoModel = new LottoModel(10000);
    test("사용자가 구매한 임의 로또 번호와 실제 로또 번호 일치 개수 판정", () => {
      const userNumbers = [1, 2, 3, 4, 5, 6];
      const targetNumbers = userNumbers;
      lottoModel.setTargetNumbers(targetNumbers);

      const [target, bonus] = lottoModel.calculateCorrect(userNumbers);

      expect(target).toEqual(6);
      expect(bonus).toEqual(0);
    });
  });
});
