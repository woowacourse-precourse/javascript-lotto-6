import sortNumberArray from '../src/domain/utils/sortNumberArray';
import convertWinningAmount from '../src/domain/utils/convertWinningAmount';

describe('Sorting Test', () => {
  test('숫자로 이루어진 배열 정렬 테스트', () => {
    const input = [-1, -3, 5, 0, 9];
    const result = [-3, -1, 0, 5, 9];

    expect(sortNumberArray(input)).toEqual(result);
  });
});

describe('Winning Amount Test', () => {
  test('상금 금액을 출력해주는 함수 테스트', () => {
    const input = 100000;
    const result = '(100,000)원';

    expect(convertWinningAmount(input)).toEqual(result);
  });
});
