import isDuplication from './index.js';

describe('isDuplication', () => {
  test('중복된 값이 존재하면 true를 반환한다.', () => {
    // given
    const input = [23, 33, 45, 23, 1, 5];

    // when
    // then
    expect(isDuplication(input)).toBe(true);
  });

  test('중복된 값이 존재하지 않으면 false를 반환한다.', () => {
    // given
    const input = [4, 6, 12, 23, 33, 35];

    // when
    // then
    expect(isDuplication(input)).toBe(false);
  });
});
