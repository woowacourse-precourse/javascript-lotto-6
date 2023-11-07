import Prize from "../src/Game/Prize";
import IO from "../src/Util/IOHandler";

const mockQuestions = (input) => {
  IO.get = jest.fn();

  IO.get.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const lineTest = ["1,2,3,4,5,5", "0,2,3,4,5,6", "11,12,13,14,15,46", ""];

const bonusTest = ["6", "-1", "137", ""];

afterEach(() => {
  jest.clearAllMocks();
});

describe("당첨 번호와 보너스 번호의 예외 테스트", () => {
  test.each(lineTest)(
    "생성한 당첨 번호에 중복되거나 잘못된 값이 있다면 예외가 발생한다.",
    async (input) => {
      // given
      mockQuestions(input);

      // when
      const prize = new Prize();

      // then
      await expect(prize.lotteryLine("test")).rejects.toThrow("[ERROR]");
    }
  );

  test.each(bonusTest)(
    "당첨 번호와 보너스 번호가 중복, 혹은 보너스 번호에 잘못된 값이 있다면 예외가 발생한다.",
    async (input) => {
      // given
      const lotteryLine = "1,12,23,34,45,6";
      mockQuestions(lotteryLine);

      // when
      const prize = new Prize();
      await prize.lotteryLine();

      // given
      mockQuestions(input);

      // then
      await expect(prize.bonusNum("test")).rejects.toThrow("[ERROR]");
    }
  );
});

test("제공한 값과 동일한 당첨 번호가 출력되어야 한다", async () => {
  // given
  mockQuestions("1,42,32,9,27,11");

  // when
  const prize = new Prize();
  await prize.lotteryLine("test");

  // given
  mockQuestions("24");

  // when
  await prize.bonusNum("test");

  // then
  await expect(prize.get()).toStrictEqual({
    line: [1, 42, 32, 9, 27, 11],
    bonus: 24,
  });
});
