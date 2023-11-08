import lottoNumberMatching from './lottoNumberMatching.module';

describe('로또 번호 매칭 테스트', () => {
  test.each([
    {
      input: {
        lottoNumbers: [[1, 2, 3, 4, 5, 6]],
        winningLottoInfo: { bonusNumber: 7, winningLottoNumber: [1, 2, 3, 4, 5, 6] },
      },
      output: [{ matchCount: 6, hasBonusNumber: false }],
    },
    {
      input: {
        lottoNumbers: [[10, 20, 30, 40, 41, 42]],
        winningLottoInfo: { bonusNumber: 25, winningLottoNumber: [1, 2, 3, 7, 8, 9] },
      },
      output: [{ matchCount: 0, hasBonusNumber: false }],
    },
    {
      input: {
        lottoNumbers: [
          [4, 8, 15, 16, 23, 42],
          [8, 15, 24, 16, 42, 4],
        ],
        winningLottoInfo: { bonusNumber: 32, winningLottoNumber: [4, 8, 15, 16, 23, 42] },
      },
      output: [
        { matchCount: 6, hasBonusNumber: false },
        { matchCount: 5, hasBonusNumber: false },
      ],
    },
    {
      input: {
        lottoNumbers: [[3, 12, 21, 30, 39, 48]],
        winningLottoInfo: { bonusNumber: 30, winningLottoNumber: [5, 12, 19, 26, 33, 40] },
      },
      output: [{ matchCount: 1, hasBonusNumber: true }],
    },
  ])(
    '보너스 번호가 $input.winningLottoInfo.bonusNumber 이며, 당첨 로또 번호가 $input.winningLottoInfo.winningLottoNumber일 때, 예상한 결과가 나와야 한다.',
    ({ input, output }) => {
      // given - when
      const result = lottoNumberMatching.createLottoMatchingResult(input);
      // then
      expect(result).toStrictEqual(output);
    },
  );
});
