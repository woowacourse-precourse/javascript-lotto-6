import LottoData from "../src/LottoData";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("LottoData 클래스 테스트", () => {
  test("pickRandomLotto 함수", () => {
    mockRandoms([[1, 9, 44, 17, 5, 23]]);

    const lottoData = new LottoData();
    const expectedOutput = [1, 5, 9, 17, 23, 44];

    const result = lottoData.pickRandomLotto();
    expect(result).toEqual(expectedOutput);
  });

  test("iterRandomLottoAndSave 함수", async () => {
    mockRandoms([
      [1, 9, 44, 17, 5, 23],
      [4, 9, 10, 42, 33, 22],
      [11, 22, 33, 44, 9, 8],
    ]);
    mockQuestions(["3000", "1, 2, 3, 4, 5, 6", "7"]);

    const lottoData = new LottoData();

    const expectedOutput = [
      [1, 5, 9, 17, 23, 44],
      [4, 9, 10, 22, 33, 42],
      [8, 9, 11, 22, 33, 44],
    ];

    await lottoData.inputPurchaseAmount();

    lottoData.iterRandomLottoAndSave();
    expect(lottoData.getLottoData()).toEqual(expectedOutput);
  });
});
