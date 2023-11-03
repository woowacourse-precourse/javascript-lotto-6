import lottoGameConsole from '../../src/cli/lottoGameConsole';

/* eslint-disable max-lines-per-function */
describe('lottoGameConsole 테스트', () => {
  describe('output 테스트 ', () => {
    describe('purchasedLottoNumbers 메서드 테스트', () => {
      test.each([{ input: 1, output: '\n1개를 구매했습니다.' }])(
        '로또 $input개 구매 시, 메시지는 "$output" 이어야 한다.',
        ({ input, output }) => {
          // given - when - then
          expect(lottoGameConsole.output.messages.purchasedLottoNumbers(input)).toMatch(output);
        },
      );
    });

    describe('lottoNumbers 메서드 테스트', () => {
      test.each([
        { input: [[1, 2, 3, 4, 5, 6]], output: '[1, 2, 3, 4, 5, 6]' },
        {
          input: [
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
          ],
          output: '[7, 8, 9, 10, 11, 12]\n[13, 14, 15, 16, 17, 18]',
        },
      ])('로또 번호 배열의 출력 메시지는 "$output" 이어야 한다.', ({ input, output }) => {
        // given - when - then
        expect(lottoGameConsole.output.messages.lottoNumbers(input)).toMatch(output);
      });
    });
  });
});
