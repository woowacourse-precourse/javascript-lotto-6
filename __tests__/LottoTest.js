import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  const userInputNumbers = [
    [1, 2, 3, 8, 9, 10],
    [1, 2, 3, 4, 5, 8],
    [1, 2, 3, 4, 5, 7],
  ];
  const results = [
    { lottoCount: 3, isBonus: null },
    { lottoCount: 5, isBonus: false },
    { lottoCount: 5, isBonus: true },
  ];

  test.each([
    [userInputNumbers[0], results[0]],
    [userInputNumbers[1], results[1]],
    [userInputNumbers[2], results[2]],
  ])(
    '유저가 입력한 숫자와 로또 숫자를 비교한 결과 생성 테스트',
    (userNumbers, result) => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6], 7);

      expect(lotto.getResult(userNumbers)).toEqual(result);
    }
  );
});
