import Lotto from "../src/Lotto.js";
import Printer from "../src/Game/Printer.js";
import IO from "../src/Util/IOHandler.js";

const amountResults = [10, 35, 4];

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

describe("프린터 테스트", () => {
  test.each([10000, 35000, 4000])(
    "구입 금액을 가격으로 나눈 몫만큼 구매 개수가 출력된다.",
    async (input) => {
      //given
      const result = amountResults.shift();

      //when
      const printer = new Printer(input);

      //then
      await expect(printer.amount).toBe(result);
    }
  );

  test("생성된 무작위 값과 동일한 번호 목록이 출력되어야 한다", () => {
    //given
    const logSpy = jest.spyOn(IO, "print");

    //when
    const printer = new Printer(1000);
    printer.pack();
    printer.print();

    //then
    expect(logSpy).toHaveBeenCalledWith(
      `[${printer.getTicket()[0].show().join(", ")}]`
    );
  });
});
