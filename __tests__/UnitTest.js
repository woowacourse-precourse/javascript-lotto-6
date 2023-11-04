import UserPayment from "../src/domain/UserPayment";
import { Console } from "@woowacourse/mission-utils";

// UserPayment.js 관련 단위 테스트
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("구입 금액 테스트", () => {
  test("구입 금액이 천 원 단위가 아니면 예외가 발생한다", async () => {
    Console.readLineAsync.mockResolvedValue("58744");
    const pay = new UserPayment();
    await expect(pay.userPayment()).rejects.toThrow("[ERROR]");
  });
});

// UserLottoNumber.js 관련 단위 테스트
describe("사용자 로또 번호", () => {
  test("기본 로또 번호 - 공백 무시하고 10진수 배열로 받음", () => {
    const input = "5, 12,23 , 32,45, 52";
    const output = [5, 12, 23, 32, 45, 52];
    const result = input.split(",").map((number) => parseInt(number.trim(), 10));
    expect(result).toEqual(output);
  });

  test("보너스 번호 - 공백 무시하고 10진수 숫자로 받음", () => {
    const input = " 11 ";
    const output = 11;
    const result = parseInt(input.trim(), 10);
    expect(result).toEqual(output);
  });

  test("오름차순", () => {
    const input = "5,8,3,1,9,7";
    const output = ["1", "3", "5", "7", "8", "9"];
    const array = input.split(",");
    const result = array.sort((a, b) => a - b);
    expect(result).toEqual(output);
  });
});

// RunLotteryMachine.js 관련 단위 테스트
const MissionUtils = {
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
};

describe("랜덤수 생성", () => {
  test("1에서 45 사이 6개의 서로 다른 정수", () => {
    const input = [5, 11, 18, 20, 25, 37];
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(input);

    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    expect(numbers).toHaveLength(6);

    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });

    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(numbers.length);
  });
});
