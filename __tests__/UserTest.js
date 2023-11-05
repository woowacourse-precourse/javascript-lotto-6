import User from '../src/User.js';

describe('User 클래스 테스트', () => {
  test('구매 금액에 맞는 로또 수량이 생성됐는지 테스트', () => {
    const user = new User(1000);
    expect(user.lottos.length).toBe(1);
  });
});
