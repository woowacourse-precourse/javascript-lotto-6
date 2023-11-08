import App from "../src/App.js";
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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('getPurchaseAmount 메서드 테스트', () => {
  test('getPurchaseAmount 메서드는 형식에 맞지않는 입력이 들어왔을경우, ERROR를 throw 해야한다.', async () => {
    //given
    const inputWithString = ["1000j"];

    mockQuestions(inputWithString);

    //when
    const app = new App();
    let error;
    try {
      const getPurchaseAmount = await app.getPurchaseAmount();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 구입 금액은 1,000원 단위 숫자여야 합니다.");
  });

  test('getPurchaseAmount 메서드는 1000으로 나누어지지않는 입력이 들어왔을경우, ERROR를 throw 해야한다.', async () => {
    //given
    const inputWithNotDivisible = ["1001"];

    mockQuestions(inputWithNotDivisible);

    //when
    const app = new App();
    let error;
    try {
      const getPurchaseAmount = await app.getPurchaseAmount();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  });

  test('getPurchaseAmount 메서드는 입력값/1000 을 리턴해야한다.', async () => {
    //given
    const input = ["5000"];

    mockQuestions(input);

    //when
    const app = new App();
    const PurchaseAmount = await app.getPurchaseAmount();

    //then
    expect(PurchaseAmount).toBe(5);
  });
});
