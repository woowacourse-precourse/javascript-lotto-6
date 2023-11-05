import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('빈 값인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = [];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow(ERROR.type);
  });

  test('번호의 타입이 숫자인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = ['a', 1, 4, 5, 10, 12];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow(ERROR.type);
  });

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

  test('번호 범위가 1~45인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = [1, 4, 5, 10, 12, 46];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow(ERROR.type);
  });
});
