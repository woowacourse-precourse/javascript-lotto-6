import Lotto from '../src/Lotto.js';
import { parseNumber, parseNumbers } from '../src/utils/index.js';

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

describe('로또 번호 파싱 테스트', () => {
  test.each([
    ['8,21,34,하,23'],
    ['6,3,42,3,2,,,,,'],
    [',,,,5,3,4,2'],
    ['5,2,,,24,3,2'],
  ])('입력에 숫자가 아닌게 올 경우', (input) => {
    expect(() => parseNumbers(input)).toThrow('[ERROR]');
  });
});

describe('보너스 번호 파싱 테스트', () => {
  test.each([['가'], ['다']])('입력애 숫자가 아닌게 올 경우', (input) => {
    expect(() => parseNumber(input)).toThrow('[ERROR]');
  });
});
