import User from "../../src/domains/User.js";

describe("사용자 클래스 테스트", () => {
  function mockUserLotto(numbers) {
    return {
      getNumbers: () => numbers.sort((a, b) => a - b),
    };
  }

  test("특정 금액이 제공되었을 때 사용자는 주어진 금액을 가지고 있어야한다", () => {
    // given
    const money = 1000;

    // when
    const user = new User(money);

    // then
    expect(user.getMoney()).toBe(money);
  });

  test("사용자가 사용한 금액은 처음에 0원이여야 한다.", () => {
    // given
    const money = 1000;

    // when
    const user = new User(money);

    // then
    const usedMoney = user.getUsedMoney();
    expect(usedMoney).toBe(0);
  });

  test("사용자는 처음에 어떠한 로또도 가지고 있지 않다.", () => {
    // given
    const money = 1000;

    // when
    const user = new User(money);

    // then
    const lottoList = user.getLottoList();
    expect(lottoList).toEqual([]);
  });

  test("사용자는 음수의 금액을 가질 수 없다.", () => {
    // given
    const money = -1000;

    // when & then
    expect(() => new User(money)).toThrow("[ERROR] 금액은 양수여야 합니다.");
  });

  test("사용자는 로또를 구매할 수 있다.", () => {
    // given
    const money = 3000;
    const user = new User(money);
    const lotto1 = mockUserLotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = mockUserLotto([2, 3, 4, 5, 6, 7]);

    // when
    user.buyLotto(lotto1, 1000);
    user.buyLotto(lotto2, 1000);
    const usedMoney = user.getUsedMoney();
    const leftMoney = user.getMoney();
    const userLotto = user.getLottoList();

    // then
    expect(leftMoney).toBe(1000);
    expect(userLotto).toEqual([lotto1, lotto2]);
    expect(usedMoney).toBe(2000);
  });
});
