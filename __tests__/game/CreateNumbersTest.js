import { Random } from "@woowacourse/mission-utils";
import createNumbers from "../../src/controller/createNumbers.js";

const mockRandomNumbers = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];

describe("LottoGame CreateNumber 테스트", () => {
  beforeEach(() => {
    Random.pickUniqueNumbersInRange = jest.fn();
  });

  test("금액에 맞게 번호가 생성되어야 함.", () => {
    //given
    mockRandomNumbers.forEach((numbers) => {
      Random.pickUniqueNumbersInRange.mockReturnValueOnce(numbers);
    });

    //when
    const result = createNumbers(8);

    //then
    expect(result).toEqual(mockRandomNumbers);
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(8);
  });
});
