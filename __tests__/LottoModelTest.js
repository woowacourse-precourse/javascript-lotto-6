import LottoModel from "../src/model/LottoModel";
import SETTINGS from "../src/constants/settings";
import MESSAGES from "../src/constants/messages";

describe("LottoModel 테스트", () => {
  let lottoModel;

  beforeEach(() => {
    lottoModel = new LottoModel(SETTINGS.priceUnit);
  });

  test("사용자가 입력한 로또 구매 금액을 설정하고 가져오기", () => {
    const price = 10000;
    lottoModel = new LottoModel(price);

    expect(lottoModel.getPrice()).toBe(price);
  });

  test("사용자가 설정한 당첨 번호를 설정하고 가져오기", () => {
    const numbers = [3, 7, 12, 18, 22, 45];

    lottoModel.setTargetNumbers(numbers);

    expect(lottoModel.getTargetNumbers()).toEqual(numbers);
  });

  test("중복된 당첨 번호 입력인 경우 예외 처리", () => {
    const invalidNumbers = [1, 2, 3, 4, 5, 5];

    expect(() => lottoModel.validateTargetNumbers(invalidNumbers)).toThrow(
      MESSAGES.error.notDuplicateTargetNumbers
    );
  });

  test("범위를 벗어나는 당첨 번호가 있는 경우 예외 처리", () => {
    const invalidNumber = SETTINGS.targetNumber.maximum * 2;
    const invalidNumbers = [1, 2, 3, 4, 5, invalidNumber];

    expect(() => lottoModel.validateTargetNumbers(invalidNumbers)).toThrow(
      MESSAGES.error.invalidRange
    );
  });

  test("유효한 당첨 번호 입력인 경우 검증 통과", () => {
    const numbers = [10, 15, 20, 25, 30, 35];

    expect(() => lottoModel.validateTargetNumbers(numbers)).not.toThrow();
  });

  test("범위를 벗어나는 보너스 번호인 경우 예외 처리", () => {
    const number = SETTINGS.targetNumber.maximum * 2;

    expect(() => lottoModel.validateBonusNumbers(number)).toThrowError(
      MESSAGES.error.invalidRange
    );
  });

  test("이미 당첨 번호에 있는 보너스 번호인 경우 예외 처리", () => {
    const numbers = [10, 15, 20, 25, 30, 35];
    const number = 25;

    lottoModel.setTargetNumbers(numbers);

    expect(() => lottoModel.validateBonusNumbers(number)).toThrowError(
      MESSAGES.error.notDuplicateTargetNumbers
    );
  });

  test("유효한 보너스 번호인 경우 검증 통과", () => {
    const numbers = [10, 15, 20, 25, 30, 35];
    const number = 42;

    lottoModel.setTargetNumbers(numbers);

    expect(() => lottoModel.validateBonusNumbers(number)).not.toThrow();
  });

  test("사용자가 구매한 임의 로또 번호와 실제 로또 번호 일치 개수 판정", () => {
    const userNumbers = [1, 2, 3, 4, 5, 6];
    const targetNumbers = userNumbers;

    lottoModel.setTargetNumbers(targetNumbers);
    const [target, bonus] = lottoModel.calculateCorrect(userNumbers);

    expect(target).toEqual(6);
    expect(bonus).toEqual(0);
  });

  test("수익을 계산할 때 올바른 결과를 반환해야 합니다", () => {
    const dummyResult = [0, 5, 3, 2, 1, 0];
    dummyResult.forEach((count, prize) => {
      for (let i = 0; i < count; i++) {
        lottoModel.addCount(prize);
      }
    });

    const expectedIncome =
      dummyResult[1] * SETTINGS.income.first +
      dummyResult[2] * SETTINGS.income.second +
      dummyResult[3] * SETTINGS.income.third +
      dummyResult[4] * SETTINGS.income.fourth +
      dummyResult[5] * SETTINGS.income.fifth;

    lottoModel.setIncome();

    expect(lottoModel.getIncome()).toBe(expectedIncome);
  });
});
