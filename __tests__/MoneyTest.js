import Money from "../src/Money";

describe("머니 클래스 테스트", () => {
  test("돈이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money("천원");
    }).toThrow("[ERROR]");
  });

  test("돈이 1000원 미만일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(900);
    }).toThrow("[ERROR]");
  });

  test("돈이 1000원으로 나누어 떨어지지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(2300);
    }).toThrow("[ERROR]");
  });

  test("돈이 잘 입력됐을 경우에는 true를 리턴한다", () => {
    expect(() => {
      new Money(4000);
    }).toBeTruthy();
  });

  test("랭킹 입력 시 알맞은 당첨금을 리턴하는지", () => {
    //given
    const rank = 2;

    //when
    const money = new Money(1000);
    const winningsMoney = money.winnings(rank);

    //then
    expect(winningsMoney).toEqual(30000000);
  });

  test("랭킹 입력 시 배열에서 알맞은 위치의 카운트가 +1 되는지", () => {
    //given
    const rank = 2;
    const rankingCounts = [0, 1, 0, 0, 0];

    //when
    const money = new Money(1000);
    money.rankingCountsArray(rank);

    //then
    expect(money.getRankingCounts).toEqual(rankingCounts);
  });
});
