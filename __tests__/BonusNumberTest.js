import { Console } from "@woowacourse/mission-utils";
import printBonusNumber from "../src/ui/PrintBonusNumber";

const mockConsole = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.print = jest.fn();

  const inputGenerator = inputs.values();
  Console.readLineAsync.mockImplementation(() => {
    const { value, done } = inputGenerator.next();
    return Promise.resolve(done ? null : value);
  });
};

describe("유효하지 않은 보너스 번호를 입력할 때 예외 메시지를 출력하고 다시 입력받는 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("숫자가 아닌 값이 보너스 숫자에 포함되는 경우", async () => {
    mockConsole(["abc", "7,8", "7"]);
    const result = await printBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(Console.readLineAsync).toHaveBeenCalledTimes(3);
    expect(Console.print).toHaveBeenCalledTimes(2);
    expect(result).toBe(7);
  });

  test("당첨 번호와 중복되는 번호를 입력받는 경우", async () => {
    mockConsole(["6", "7"]);
    const result = await printBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenCalledTimes(1);
    expect(result).toBe(7);
  });

  test("보너스 번호가 1-45사이 이외의 숫자를 입력 받는 경우", async () => {
    mockConsole(["46", "7"]);
    const result = await printBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenCalledTimes(1);
    expect(result).toBe(7);
  });
});
