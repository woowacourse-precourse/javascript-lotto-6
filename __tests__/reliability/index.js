import { Random } from "@woowacourse/mission-utils";
import Tickets from "../../src/lib/Domain/Tickets";
import Calc from "../../src/lib/Utils/Calc";

describe("당첨 결과 분포 편향 확인", () => {
  test("당첨 결과의 분포는 정해진 확률에 따르며 관측된 결과는 신뢰 범위 이내에 존재하여야 한다.", async () => {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 7);
    const LENGTH = 20000;
    const PERCENTAGES = [
      1 / 8145060,
      6 / 8145060,
      228 / 8145060,
      11115 / 8145060,
      182780 / 8145060,
      7950930 / 8145060,
    ];
    const TARGET_VALUE = 11.07;
    const expectedGroup = PERCENTAGES.map((v) => v * LENGTH);

    const tickets = new Tickets(LENGTH * 1000);
    const prizeMap = Calc.prizeMap(
      tickets.items,
      numbers.slice(0, 6),
      numbers.slice(6, 7),
    );

    const testValue = expectedGroup
      .map((expected, i) => {
        const observed = prizeMap.get(i + 1) ?? 0;
        return (observed - expected) ** 2 / expected;
      })
      .reduce((a, b) => a + b);

    expect(testValue).toBeLessThanOrEqual(TARGET_VALUE);
  });
});

describe("당첨 번호 편향 확인", () => {
  test("당첨 번호는 1/45로 분포되어야 하며 관측된 결과는 신뢰 범위 이내에 존재하여야 한다.", () => {
    // given
    const observedGroup = Array.from({ length: 45 }, () => 0);
    const LENGTH = 5000;
    const TARGET_VALUE = 59.48;
    const expected = LENGTH / 45;

    // when
    const tickets = new Tickets(LENGTH * 1000);
    tickets.items.forEach((ticket) => {
      ticket.forEach((number) => (observedGroup[number - 1] += 1));
    });
    const testValue = observedGroup
      .map((observed) => (observed - expected) ** 2 / expected)
      .reduce((a, b) => a + b);

    // then
    expect(testValue).toBeLessThanOrEqual(TARGET_VALUE);
  });
});
