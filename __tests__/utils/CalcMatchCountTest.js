import calcMatchCount from '../../src/utils/calcMatchCount.js';

describe('두 배열에 일치하는 요소의 개수를 반환하는 유틸 함수 테스트', () => {
  test('테스트 1', () => {
    const targetArr = [3, 4, 5, 6, 7, 8];
    const arr = [1, 2, 3, 4, 5, 6]
    expect(calcMatchCount(targetArr, arr)).toEqual(4); 
  });
});
