import { GAME_RULE } from '../src/constants/gameRule.js';
import Money from '../src/model/Money.js';

describe('💙 Money 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  let money;

  beforeEach(() => {
    money = new Money();
  });

  test('[setMoney] money 필드의 값을 세팅할 수 있다.', () => {
    const initialMoney = 5000;
    money.setMoney(initialMoney);

    expect(money.getMoney()).toBe(initialMoney);
  });

  test('[getMoney] 현재 세팅되어 있는 money를 반환한다.', () => {
    const initialMoney = 3000;
    money.setMoney(initialMoney);

    expect(money.getMoney()).toBe(initialMoney);
  });

  test('[getPurchaseCount] 구매 가능한 로또 티켓의 수를 반환해야 한다', () => {
    const initialMoney = 5000;
    const expectedCount = initialMoney / GAME_RULE.MIN_AMOUNT_UNIT;
    money.setMoney(initialMoney);

    expect(money.getPurchaseCount()).toBe(expectedCount);
  });
});
