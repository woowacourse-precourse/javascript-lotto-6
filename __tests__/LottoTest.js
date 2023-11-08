import validator from '../src/Validator/validator.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateLottoNumbersLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateLottoNumbersDuplicate([1, 2, 3, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  test('로또 번호에 숫자가 아닌 타입의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateLottoNumbersIsNumber([1, 2, 3, 'd', 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('각 로또 번호가 1-45 사이의 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateLottoNumbersRange([1, 2, 50, 4, 5, 6]);
    });
  });
});
