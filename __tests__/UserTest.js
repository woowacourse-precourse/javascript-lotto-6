import User from '../src/User.js';

describe('로또 구입금액 입력 테스트', () => {
  let user;

  beforeEach(() => {
    user = new User();
  });

  test('1,000원 미만 구입금액 입력 시 에러가 발생한다.', async () => {
    user.calculateLottoCount = jest.fn().mockResolvedValue('500');

    try {
      await user.calculateLottoCount();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
