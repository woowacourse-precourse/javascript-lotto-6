import LottoModel from "../src/model/LottoModel";
import SETTINGS from "../src/constants/settings";

describe("LottoApp 모델 테스트", () => {
  let lottoModel;

  beforeEach(() => {
    lottoModel = new LottoModel();
  });

  describe("총 가격 설정 및 가져오기", () => {
    test("총 가격을 설정하고 가져오기", () => {
      const totalPrice = 14000;
      lottoModel.setPriceInfo(totalPrice);
      expect(lottoModel.getTotalPrice()).toBe(totalPrice);
    });
  });

  describe("목표 번호 설정 및 가져오기", () => {
    test("목표 번호를 설정하고 가져오기", () => {
      const targetNumbers = [3, 7, 12, 18, 22, 45];
      lottoModel.setTargetNumbers(targetNumbers);
      expect(lottoModel.getTargetNumbers()).toEqual(targetNumbers);
    });

    test("유효하지 않은 목표 번호이면 예외 처리", () => {
      const invalidNumbers = [1, 1, 2, 3, "abc"];
      expect(() => lottoModel.validateTargetNumbers(invalidNumbers)).toThrow();

      const validNumbers = [2, 4, 6, 8, 10, 12];
      expect(() =>
        lottoModel.validateTargetNumbers(validNumbers)
      ).not.toThrow();
    });
  });

  describe("수익 계산 테스트", () => {
    test("수익을 계산할 때 올바른 결과 반환", () => {
      // result 배열 값 설정
      lottoModel.result = [0, 5, 3, 2, 1, 0]; // 각 등수별 당첨 횟수

      // 기대되는 수익 계산
      const expectedIncome =
        5 * SETTINGS.income.first +
        3 * SETTINGS.income.second +
        2 * SETTINGS.income.third +
        1 * SETTINGS.income.fourth +
        0 * SETTINGS.income.fifth;

      // calculateIncome() 메서드 호출
      lottoModel.calculateIncome();

      // 기대되는 수익과 실제 계산된 수익 비교
      expect(lottoModel.income).toBe(expectedIncome);
    });
  });
});
