import Lotto from '../../src/Lotto';
import OPTION from '../../src/constants/option';
import Account from '../../src/models/Account';

describe('구입 금액 테스트', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('구입 금액이 정수가 아니거나 음수이면 예외를 발생시킨다', () => {
    const inputs = ['abc', -1000];

    inputs.forEach((input) =>
      expect(() => account.setPurchaseAmount(input)).toThrow('[ERROR]'),
    );
  });

  test(`구입 금액이 0이거나 1000으로 나누어 떨어지지 않으면 예외를 발생시킨다`, () => {
    const inputs = [0, 1500];

    inputs.forEach((input) =>
      expect(() => account.setPurchaseAmount(input)).toThrow('[ERROR]'),
    );
  });

  test(`구입 금액을 반환할 수 있다.`, () => {
    const inputs = [1000, 2000];

    inputs.forEach((input) => {
      account.setPurchaseAmount(input);
      expect(account.getPurchaseAmount(input)).toBe(input);
    });
  });
});

describe('로또 추가 테스트', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('로또 한 개를 추가할 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    account.addLotto(lotto);

    expect(account.getLottos()).toHaveLength(1);
  });

  test('로또 두 개를 추가할 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    account.addLotto(lotto);
    account.addLotto(lotto);

    expect(account.getLottos()).toHaveLength(2);
  });
});
