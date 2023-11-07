import Lotto from '../src/Lotto.js';
import ERROR_MESSAGE from '../utils/ErrorMessages.js';

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

  test('로또 번호에 1에서 45사이의 정수가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    const invalidLottoNumbers = [
      [-1, 1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 46],
      [1.1, 2, 3, 4, 5, 6],
    ];

    invalidLottoNumbers.forEach((invalidLottoNumber) =>
      expect(() => new Lotto(invalidLottoNumber)).toThrow(ERROR_MESSAGE.invalidLottoNumber),
    );
  });
  test('로또 번호에 모두 조건에 맞는 번호가 있으면 예외가 발생하지 않는다.', () => {
    const validLottoNumber = [1, 2, 3, 4, 5, 6];

    expect(() => new Lotto(validLottoNumber)).not.toThrow(ERROR_MESSAGE.invalidLottoNumber);
  });

  test('일치하는 번호의 갯수에 맞는 등수를 리턴하는지 테스트', () => {
    const mainNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const testCases = [
      [7, 8, 9, 10, 11, 12],
      [1, 8, 9, 10, 11, 12],
      [1, 2, 8, 9, 10, 11],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ];
    const expectedResult = [
      'nothing',
      'nothing',
      'nothing',
      'fifthPrize',
      'fourthPrize',
      'thirdPrize',
      'secondPrize',
      'firstPrize',
    ];

    testCases.forEach((testCase, index) => {
      expect(new Lotto(testCase).raffleLotto(mainNumbers, bonusNumber)).toBe(expectedResult[index]);
    });
  });
});
