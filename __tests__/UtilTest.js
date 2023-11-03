import formatLottoNumbers from '../src/utils/formatLottoNumbers';

describe('💙 Util 함수를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[formatLottoNumbers] lottoNumbers를 인자로 받아 포매팅된 문자열을 반환해요.', () => {
    const lottoNumbers = [8, 21, 23, 41, 42, 43];
    const expectedResult = '[8, 21, 23, 41, 42, 43]';

    expect(formatLottoNumbers(lottoNumbers)).toBe(expectedResult);
  });
});
