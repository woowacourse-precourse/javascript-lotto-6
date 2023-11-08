import { ascendingNumbers, countBy, intersection } from './array.module.js';

describe('Array 함수형 모듈 테스트', () => {
  describe('ascendingNumbers 테스트', () => {
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

  describe('countBy 테스트', () => {
    test.each([
      {
        input: [1, 2, 3, 4, 5, 2, 3, 4],
        calculateFunction: (n) => n,
        output: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 1 },
      },
      {
        input: ['apple', 'banana', 'cherry', 'apple', 'cherry'],
        output: { apple: 2, banana: 1, cherry: 2 },
      },
    ])('입력 값이 $input 일 때, 결과는 $output 이다.', ({ input, calculateFunction, output }) => {
      // given - when
      const result = countBy(input, calculateFunction ?? null);
      // then
      expect(result).toStrictEqual(output);
    });
  });

  describe('intersection 테스트', () => {
    test.each([
      {
        input: {
          firstArray: [1, 2, 3, 4],
          secondArray: [3, 4, 5, 6],
        },
        output: [3, 4],
      },
      {
        input: {
          firstArray: ['apple', 'banana', 'cherry'],
          secondArray: ['cherry', 'apple', 'grape'],
        },
        output: ['apple', 'cherry'],
      },
      {
        input: {
          firstArray: [1, 2, 3],
          secondArray: [4, 5, 6],
        },
        output: [],
      },
    ])(
      '첫 번째 배열이 $input.firstArray 이고, 두 번째 배열이 $input.secondArray 일 때, 교집합 결과는 $output 이다.',
      ({ input, output }) => {
        // given
        const { firstArray, secondArray } = input;
        // when
        const result = intersection(firstArray, secondArray);
        // then
        expect(result).toStrictEqual(output);
      },
    );
  });
});
