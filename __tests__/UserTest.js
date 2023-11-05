import User from '../src/User.js';

describe('로또 구입금액 입력 테스트', () => {
  let user;

  beforeEach(() => {
    user = new User();
  });

  test('1,000원 미만 구입금액 입력 시 에러가 발생한다.', () => {
    const inputAmount = 500;
    expect(() => user.calculateLottoCount(inputAmount)).toThrow('[ERROR]');
  });

  test('1,000원 이상 구입금액 입력 시 올바른 로또 발행 수가 계산된다.', () => {
    const inputAmount = 3000;
    const lottoCount = user.calculateLottoCount(inputAmount);
    expect(lottoCount).toBe(3);
  });

  test('1,000원 이상이면서 1,000원으로 딱 떨어지지 않는 경우 계산이 정확히 이루어진다.', () => {
    const inputAmount = 2500;
    const lottoCount = user.calculateLottoCount(inputAmount);
    expect(lottoCount).toBe(2);
  });
});
