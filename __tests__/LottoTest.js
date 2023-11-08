import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});

describe('로또 매칭 숫자 계산 기능 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('로또 번호가 6개 매칭될 때, 6을 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(6);
  });

  test('로또 번호가 5개 매칭될 때, 5을 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(5);
  });

  test('로또 번호가 4개 매칭될 때, 4을 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 7, 8];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(4);
  });

  test('로또 번호가 3개 매칭될 때, 3을 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(3);
  });

  test('로또 번호가 2개 매칭될 때, 2을 반환한다.', () => {
    const winningNumbers = [1, 2, 7, 8, 9, 10];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(2);
  });

  test('로또 번호가 1개 매칭될 때, 1을 반환한다.', () => {
    const winningNumbers = [1, 7, 8, 9, 10, 11];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(1);
  });

  test('로또 번호가 0개 매칭될 때, 0을 반환한다.', () => {
    const winningNumbers = [7, 8, 9, 10, 11, 12];
    expect(lotto.calculateMatchNumber(winningNumbers)).toEqual(0);
  });
});
