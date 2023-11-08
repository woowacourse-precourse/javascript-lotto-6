import Lotto from '../src/Lotto.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호 길이 예외 테스트(6자리 이상)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 중복값 예외 테스트', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 범위(1 ~ 45) 예외 테스트', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 오름차순 출력 테스트', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    const lottoInstance = new Lotto([3, 1, 5, 2, 4, 6]);

    expect(lottoInstance.getNumbers()).toEqual(expectedResult);
  });
});
