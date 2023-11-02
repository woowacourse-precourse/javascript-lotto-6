import LottoModel from "../src/model/LottoModel";
import SETTINGS from "../src/constants/settings";
import MESSAGES from "../src/constants/messages";

describe("LottoModel 테스트", () => {
  let lottoModel;

  beforeEach(() => {
    lottoModel = new LottoModel();
  });

  describe("로또 구매 금액 설정 및 가져오기", () => {
    test("로또 구매 금액을 설정하고 가져오기", () => {
      const totalPrice = 14000;

      lottoModel.setPriceInfo(totalPrice);

      expect(lottoModel.getTotalPrice()).toBe(totalPrice);
    });
  });

  describe("당첨 번호 설정 및 가져오기", () => {
    test("당첨 번호를 설정하고 가져오기", () => {
      const targetNumbers = [3, 7, 12, 18, 22, 45];

      lottoModel.setTargetNumbers(targetNumbers);

      expect(lottoModel.getTargetNumbers()).toEqual(targetNumbers);
    });

    test("중복된 당첨 번호 예외 처리", () => {
      const invalidNumbers = [1, 2, 3, 4, 5, 5];

      expect(() => lottoModel.validateTargetNumbers(invalidNumbers)).toThrow(
        MESSAGES.error.notDuplicateTargetNumbers
      );
    });
  });

  describe("수익 계산 테스트", () => {
    test("수익을 계산할 때 올바른 결과 반환", () => {
      lottoModel.result = [0, 5, 3, 2, 1, 0];
      const expectedIncome =
        lottoModel.result[1] * SETTINGS.income.first +
        lottoModel.result[2] * SETTINGS.income.second +
        lottoModel.result[3] * SETTINGS.income.third +
        lottoModel.result[4] * SETTINGS.income.fourth +
        lottoModel.result[5] * SETTINGS.income.fifth;

      lottoModel.setIncome();

      expect(lottoModel.getIncome()).toBe(expectedIncome);
    });
  });

  describe("보너스 번호 테스트", () => {
    test("유효한 보너스 번호인 경우 검증 통과", () => {
      const number = 42;
      lottoModel.targetNumbers = [10, 15, 20, 25, 30, 35];

      expect(() => lottoModel.validateBonusNumbers(number)).not.toThrow();
    });

    test("범위를 벗어나는 번호인 경우 예외 처리", () => {
      const number = 100;

      expect(() => lottoModel.validateBonusNumbers(number)).toThrowError();
    });

    test("이미 로또 번호에 있는 번호인 경우 예외 처리", () => {
      const number = 25;
      lottoModel.targetNumbers = [10, 15, 20, 25, 30, 35];

      expect(() => lottoModel.validateBonusNumbers(number)).toThrowError();
    });
  });
});
