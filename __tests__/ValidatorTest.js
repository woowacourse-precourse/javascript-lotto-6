// import Validator from "../src/model/Validator.js";
import InputView from "../src/view/InputView.js";
import { Console } from "@woowacourse/mission-utils";

const mockInputs = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 금액 유효성 테스트", () => {
  test("로또 금액을 입력하지 않은 경우 예외 발생", () => {
    const moneyInput = "";
    mockInputs(moneyInput);
    expect(InputView.moneyInput()).resolves.toEqual("[ERROR]");
    // expect(InputView.moneyInput()).resolves.stringContaining();
    // const logSpy = getLogSpy();
    // moneyInput.forEach((money) => {
    //   mockInputs(money);
    //   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    // });
  });

  // test("readCarNames 메서드로 Car의 이름을 입력받고 반환", () => {
  //   const name = "mike,paul,joseph";

  //   mockInputs(name);

  //   expect(InputView.readCarNames()).resolves.toEqual(name);
  // });
});
