import Tickets from "../../../src/lib/Domain/Tickets";
import { mockRandoms } from "../../ApplicationTest";

describe("Tickets.constructor - 기능", () => {
  test("구입 금액이 조건을 갖추어 주어질 때, 정상적으로 객체가 생성되어야 한다.", () => {
    // given
    const money = 3000;
    const random = [
      [21, 2, 43, 34, 15, 26],
      [7, 28, 19, 30, 41, 12],
      [13, 24, 35, 16, 37, 29],
    ];
    const expected = [
      [2, 15, 21, 26, 34, 43],
      [7, 12, 19, 28, 30, 41],
      [13, 16, 24, 29, 35, 37],
    ];
    mockRandoms(random);

    // when
    const tickets = new Tickets(money);
    expect(tickets.items).toEqual(expected);
  });
});

describe("Tickets.constructor - 예외", () => {
  test.each([
    [0, "범위"],
    [-1000, "범위"],
    [Number.MAX_SAFE_INTEGER + 1000 - (Number.MAX_SAFE_INTEGER % 1000), "범위"],
    [1001, "나머지"],
  ])(
    "구입 금액이 %s와 같을 때, 티켓을 구입 시도하는 경우, %s의 문제로 에러를 발생시켜야 한다.",
    (money) => {
      expect(() => new Tickets(money)).toThrow("[ERROR]");
    },
  );
});

describe("Tickets.setItems - 예외", () => {
  test("이미 티켓 아이템이 존재할 때, 아이템 등록을 시도하면 에러를 발생시켜야 한다.", () => {
    // given
    const randoms = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(randoms);
    const tickets = new Tickets(1000);

    // then
    expect(() => {
      tickets.items = randoms;
    }).toThrow(
      "Cannot set property items of #<Tickets> which has only a getter",
    );
  });
});

describe("Tickets.setResult - 예외", () => {
  test("이미 결과가 존재할 때, 결과 등록을 시도하면 에러를 발생시켜야 한다.", () => {
    // given
    const randoms = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(randoms);
    const mockedResult = {
      prizeMap: new Map([[6, 1]]),
      winRate: 0,
    };
    const tickets = new Tickets(1000);
    tickets.result = mockedResult;

    // then
    expect(() => {
      tickets.result = mockedResult;
    }).toThrow("[ERROR]");
  });
});
