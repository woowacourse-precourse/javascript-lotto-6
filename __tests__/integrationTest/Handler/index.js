import Handler from "../../../src/lib/Handler";
import { mockQuestions, mockRandoms } from "../../ApplicationTest";

describe("Handler.tickets - 기능", () => {
  test("구입 금액에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = ["2400", "0", "-1", "32500", "foo", "3000"];
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 12, 13, 14],
      [3, 4, 5, 6, 12, 13],
      [2, 3, 4, 5, 6, 12],
      [2, 3, 4, 5, 6, 7],
    ];
    mockQuestions(questions);
    mockRandoms(randoms);

    // when
    const tickets = await Handler.tickets();

    // then
    expect(tickets.items).toEqual(randoms.slice(0, 3));
  });
});

describe("Handler.lotto - 기능", () => {
  test("당첨 번호에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = [
      "1000",
      "1,2,3,4",
      "1,2,3,4,5,46",
      "0,1,2,3,4,5",
      "1,2,3,4 ,5,6",
      "1,2,3,4,5,5",
      "1,2,3,4,5,-6",
      "1,2,3,foo,5,6",
      "1,2,3,4,5,6",
    ];
    const mockedTicketItems = [[1, 2, 3, 4, 5, 6]];
    const mockedBonus = 7;
    const expectedPrizeMap = new Map([[1, 1]]);
    mockQuestions(questions);

    // when
    const lotto = await Handler.lotto();
    // lotto의 #numbers는 private 필드므로 이를 변경하거나, getter를 별도 설정하지 않는 한 검증할 방법이 없음.
    // 불변성 이외에 '보안' 역시 목적 중 하나라고 간주하여 getter로 우회하지 않고 등수 계산을 통해 검증함
    const result = lotto.calcResult(mockedTicketItems, mockedBonus);

    // then
    expect(result.prizeMap).toEqual(expectedPrizeMap);
  });
});

describe("Handler.bonusNumber - 기능", () => {
  test("보너스 번호에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = [
      ["1,2,3,4,5,6"],
      ["0", "-1", "46", "foo", "", "1", "7"],
    ].reduce((acc, e) => acc.concat(e));
    const expected = 7;
    mockQuestions(questions);

    // when
    const lotto = await Handler.lotto();
    const bonus = await Handler.bonusNumber(lotto);

    // then
    expect(bonus).toEqual(expected);
  });
});

describe("Handler.bonusNumber - 예외", () => {
  test("로또를 생성하지 않고 보너스 번호를 검증하려고 시도하면 에러를 발생시켜야 한다.", async () => {
    // given
    const questions = ["0", "-1", "46", "foo", "", "1", "7"];
    mockQuestions(questions);

    // then
    await expect(() => Handler.bonusNumber()).rejects.toThrow("[ERROR]");
  });
});
