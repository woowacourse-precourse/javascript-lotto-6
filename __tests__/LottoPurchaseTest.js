import { Console, Random } from "@woowacourse/mission-utils";
import LottoPurchase from "../src/LottoPurchase";
import LottoPurchaseInput from "../src/LottoPurchaseInput";
import Lotto from "../src/Lotto";
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

const printSpy = jest.spyOn(Console, "print").mockImplementation(() => {});
describe("로또 구매 클래스", () => {
  //   beforeEach(() => {
  //     //
  //   });

  test("구매금액은 1,000원 단위로만 입력 가능하다.", async () => {
    //given
    const INVALID_PURCHASE_AMOUNT = 1500;
    const VALID_PURCHASE_AMOUNT = 2000;
    mockQuestions([INVALID_PURCHASE_AMOUNT, VALID_PURCHASE_AMOUNT]);

    //when
    const lottoPurchase = await LottoPurchaseInput.collectMoney();
    const lottos = lottoPurchase.generateLottos();

    //then
    expect(printSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("구매 기능", async () => {
    //given
    const VALID_PURCHASE_AMOUT = 2000;

    mockQuestions([VALID_PURCHASE_AMOUT]);
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 10],
    ]);

    // when
    const lottoPurchase = await LottoPurchaseInput.collectMoney();
    const lottos = lottoPurchase.generateLottos();

    // then
    expect(lottos).toEqual(
      [
        [1, 2, 3, 4, 5, 6],
        [5, 6, 7, 8, 9, 10],
      ].map((lotto) => new Lotto(lotto))
    );

    // when
    LottoPurchase.print(lottos);

    // then
    expect(printSpy).toHaveBeenCalledWith("\n2개를 구매했습니다.");
    expect(printSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    expect(printSpy).toHaveBeenCalledWith("[5, 6, 7, 8, 9, 10]");
  });
});
