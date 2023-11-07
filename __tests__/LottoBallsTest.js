import LottoBalls from '../src/LottoBalls';

describe('LottoBalls 테스트', () => {
  test('당첨공을 반환한다.', () => {
    const lottoBalls = new LottoBalls('1,2,3,4,5,6', '7');
    const returnBalls = {
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };
    expect(lottoBalls.getLottoBalls()).toStrictEqual(returnBalls);
  });
});
