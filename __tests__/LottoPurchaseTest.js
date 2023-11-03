import { Console, Random } from "@woowacourse/mission-utils";
import LottoPurchase from "../src/LottoPurchase";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest
    .fn()
    .mockImplementation(() => Promise.resolve(inputs.shift()));
};
const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest
    .fn()
    .mockImplementation(() => numbers.shift());
};

describe("로또 구매 클래스", () => {
  let lottoPurchase;
  beforeEach(() => {
    lottoPurchase = new LottoPurchase();
  });

  test("구매금액은 1,000원 단위로만 입력 가능하다.", async () => {
    const INVALID_PURCHASE_AMOUNT = 1500;
    mockQuestions([INVALID_PURCHASE_AMOUNT]);
    await expect(lottoPurchase.buy()).rejects.toThrow("[ERROR]");
  });

  test("구매 기능", async () => {
    //given
    const VALID_PURCHASE_AMOUT = 2000;

    mockQuestions([VALID_PURCHASE_AMOUT]);
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 10],
    ]);

    //when
    await lottoPurchase.buy();
    //then
    expect(lottoPurchase.getLottos()).toEqual([
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 10],
    ]);
  });
});
