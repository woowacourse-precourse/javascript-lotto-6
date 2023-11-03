import { ascendingNumbers } from '../../src/utils/array';

/* eslint-disable max-lines-per-function */
describe('Array 함수형 모듈 테스트', () => {
  describe('ascendingNumbers 함수 테스트', () => {
    test('주어진 숫자 배열을 오름차순으로 정렬한다.', () => {
      // given
      const input = [4, 2, 7, 1, 9];
      const output = [1, 2, 4, 7, 9];
      // when - then
      expect(ascendingNumbers(input)).toStrictEqual(output);
    });

    test('정렬 후 원본 배열은 변경되지 않는다.', () => {
      // given
      const input = [4, 2, 7, 1, 9];
      const originalCopy = [...input];
      // when
      ascendingNumbers(input);
      // then
      expect(input).toStrictEqual(originalCopy);
    });

    test('이미 정렬된 배열을 입력하면 동일한 배열을 반환한다.', () => {
      // given
      const input = [1, 2, 3, 4, 5];
      const output = [1, 2, 3, 4, 5];
      // when - then
      expect(ascendingNumbers(input)).toStrictEqual(output);
    });
  });
});
