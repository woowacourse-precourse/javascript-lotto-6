import User from '../src/User.js';

describe('User 클래스 테스트', () => {
  test('로또 구입 금액 입력에 대한 예외처리', () => {
    expect(() => {
      new User(8001);
    }).toThrow('[ERROR]');
    expect(() => {
      new User(1000000);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});
