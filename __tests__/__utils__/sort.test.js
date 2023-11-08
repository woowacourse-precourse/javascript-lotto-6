import { sortAscending, sortDescending } from '../../src/utils/sort.js';

describe('정렬 테스트', () => {
  it.each([
    { input: [4, 1, 3, 2], output: [1, 2, 3, 4] },
    { input: [11, 41, 23], output: [11, 23, 41] },
    { input: [4532, 1213, 5664], output: [1213, 4532, 5664] },
  ])('sortAscending은 배열을 오름차순으로 정렬한다.', ({ input, output }) => {
    // given & when
    const result = sortAscending(input);

    // then
    expect(result).toEqual(output);
  });

  it.each([
    { input: [4, 1, 3, 2], output: [4, 3, 2, 1] },
    { input: [11, 41, 23], output: [41, 23, 11] },
    { input: [4532, 1213, 5664], output: [5664, 4532, 1213] },
  ])('sortDescending은 배열을 오름차순으로 정렬한다.', ({ input, output }) => {
    // given & when
    const result = sortDescending(input);

    // then
    expect(result).toEqual(output);
  });
});
