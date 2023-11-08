import sortNumberArray from '../src/domain/utils/sortNumberArray';
import wrapParenthesis from '../src/domain/utils/wrapParentheses';

describe('Sorting Test', () => {
  test('숫자로 이루어진 배열 정렬 테스트', () => {
    const input = [-1, -3, 5, 0, 9];
    const result = [-3, -1, 0, 5, 9];

    expect(sortNumberArray(input)).toEqual(result);
  });
});

describe('String Test', () => {
  test('괄호를 씌워주는 함수 테스트', () => {
    const input = '내용물';
    const result = '(내용물)';

    expect(wrapParenthesis(input)).toEqual(result);
  });
});
