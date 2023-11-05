import UserPayment from "../src/domain/UserPayment";
import { Console } from "@woowacourse/mission-utils";

// Result.js 관련 단위 테스트
describe("수익률 테스트", () => {
  test("수익률 계산", () => {
    const payment = 8000;
    const prize = 5000;
    const rate = (prize / payment) * 100;
    const output = "62.5%";
    const result = `${rate}%`;
    expect(result).toEqual(output);
  });

  test("수익률 소수점 둘째 자리에서 반올림", () => {
    const payment = 7000;
    const prize = 50000;
    const rate = (prize / payment) * 100;
    const rounding = parseFloat(rate.toFixed(2));
    const output = "714.29%";
    const result = `${rounding}%`;
    expect(result).toEqual(output);
  });
});

// UserPayment.js 관련 단위 테스트
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("구입 금액 테스트", () => {
  test("구입 금액이 천 원 단위가 아니면 예외가 발생한다.", async () => {
    Console.readLineAsync.mockResolvedValue("58744");
    const pay = new UserPayment();
    await expect(pay.userPayment()).rejects.toThrow("[ERROR]");
  });

  test("구입한 로또 수량 구하기", () => {
    const input = 56000;
    const output = 56;
    const result = input / 1000;
    expect(result).toEqual(output);
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

  test("배열을 오름차순으로 정렬", () => {
    const input = "5,8,3,1,9,7";
    const output = ["1", "3", "5", "7", "8", "9"];
    const array = input.split(",");
    const result = array.sort((a, b) => a - b);
    expect(result).toEqual(output);
  });

  test("보너스 번호가 중복 숫자일 경우 예외가 발생한다.", () => {
    const number = 5;
    const array = [1, 2, 3, 4, 5, 6];

    expect(() => {
      if (array.includes(number)) {
        throw new Error("[ERROR]");
      }
    }).toThrow("[ERROR]");
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
