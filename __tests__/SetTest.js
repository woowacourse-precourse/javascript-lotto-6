/* eslint-disable max-lines-per-function */
describe('Set 클래스', () => {
  const input = new Set([1, 2, 3]);

  test('size 속성 접근자로 Set의 크기 확인', () => {
    const result = 3;

    expect(input.size).toBe(result);
  });

  test.each([
    {
      item: 1,
      result: true,
    },
    {
      item: 2,
      result: true,
    },
    {
      item: 3,
      result: true,
    },
    {
      item: 4,
      result: false,
    },
    {
      item: 5,
      result: false,
    },
  ])('has 메서드로 1,2,3의 값이 존재하는지 확인', ({ item, result }) => {
    expect(input.has(item)).toEqual(result);
  });
});
