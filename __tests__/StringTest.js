/* eslint-disable max-lines-per-function */
describe('문자열 테스트', () => {
  test('split 메서드로 주어진 값을 구분', () => {
    const input = '1,2';
    const result = input.split(',');

    expect(result).toContain('2', '1');
    expect(result).toContainEqual('1', '2');
  });

  test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
    const input = '1';
    const result = input.split(',');

    expect(result).toContain('1');
  });

  test('substring 메서드로 "()"를 제거하고 "1,2"를 반환 ', () => {
    const input = '(1,2)';
    const result = '1,2';

    expect(input.substring(1, 4)).toBe(result);
  });

  describe('at 메서드', () => {
    const input = 'abc';

    test('at 메서드로 특정 위치의 문자 찾기', () => {
      const result = input.at(0);

      expect(result).toEqual('a');
    });

    test.each([-7, 8, 12])('at 메서드로 특정 문자열의 위치 값을 벗어나면 항상 undefined 반환', (index) => {
      const result = input.at(index);

      expect(result).toBe(undefined);
    });
  });
});
