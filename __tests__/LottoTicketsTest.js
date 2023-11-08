import { MissionUtils } from "@woowacourse/mission-utils";
import LottoTickets from "../src/LottoTickets.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};


describe("로또 구입 금액 테스트", () => {
  test("유효한 금액 입력", () => {
    expect(() => {
      new LottoTickets(2000);
    }).not.toThrow()
  });

  test("빈 문자열을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoTickets('');
    }).toThrow("[ERROR]");
  });

  test("숫자가 외의 문자 입력", () => {
    expect(() => {
      new LottoTickets(['asdf1']);
    }).toThrow("[ERROR]");
  });
  

  test("1000원 이하의 금액 입력", () => {
    expect(() => {
      new LottoTickets(930);
    }).toThrow("[ERROR]");
  });

  test("1000원 이상이나 1000원 단위가 아닌 금액 입력", () => {
    expect(() => {
      new LottoTickets(1500);
    }).toThrow("[ERROR]");
  });
})

describe("로또 발행 테스트", () => {
  test('발행된 로또와 일치함', () => {
    const randoms = [[1, 5, 9, 16, 25, 33], [1, 2, 3, 4, 5, 6]]

    mockRandoms(randoms)

    const input = new LottoTickets(2000).publishTickets();
    expect(input).toEqual(randoms);
  });
})