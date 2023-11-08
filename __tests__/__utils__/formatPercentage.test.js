import formatPercentage from '../../src/utils/formatPercentage.js';

describe('퍼센테이지 변환 유틸리티 함수 테스트', () => {
  it.each([
    { input: 100, decimalPoint: 1, output: '100.0%' },
    { input: 1_000_000, decimalPoint: 1, output: '1,000,000.0%' },
    { input: 66.6666, decimalPoint: 1, output: '66.7%' },
    { input: 66.6656, decimalPoint: 2, output: '66.67%' },
    { input: 1_000_000.9, decimalPoint: 0, output: '1,000,001%' },
    { input: 1_000.88, decimalPoint: 1, output: '1,000.9%' },
    { input: 55.74, decimalPoint: 1, output: '55.7%' },
  ])(
    '입력값을 소숫점 $decimalPoint의 자리에 반올림하여 천 단위로 콤마를 찍는다.',
    ({ input, decimalPoint, output }) => {
      // given & when
      const result = formatPercentage(input, decimalPoint);

      // then
      expect(result).toBe(output);
    },
  );
});
