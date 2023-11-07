import Lotto from "../src/Lotto.js";
import User from "../src/User.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 구매 테스트", () => {
  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate(500);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate(-1000);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate("hi");
    }).toThrow("[ERROR]");
  });

  // describe("로또 발행 테스트", () => {
  //   test("8000원은 입력한 경우 8개의 로또를 발행한다.", () => {
  //     const consoleSpy = jest.spyOn(console, "log");

  //     const user = new User();
  //     user.calculateCount(8000);

  //     expect(consoleSpy).toHaveBeenCalledWith("\n8개를 구매했습니다.");

  //     consoleSpy.mockRestore();
  //   });
  // });
});
