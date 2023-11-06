import lottoGameConsole from './lottoGameConsole.module';

describe('lottoGameConsole 테스트', () => {
  describe('output 테스트', () => {
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

    describe('rankDistributionTable 메서드 테스트', () => {
      test.each([
        {
          input: { '1st': 1, '2nd': 1, '3rd': 1, '4th': 1, '5th': 1 },
          output:
            '3개 일치 (5,000원) - 1개\n4개 일치 (50,000원) - 1개\n5개 일치 (1,500,000원) - 1개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 1개\n6개 일치 (2,000,000,000원) - 1개',
        },
        {
          input: { '1st': 1, '3rd': 1 },
          output:
            '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 1개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 1개',
        },
        {
          input: null,
          output:
            '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개',
        },
      ])(
        'rankDistributionTable가 $input일 때 포맷팅 된 메시지는 $output이다.',
        ({ input, output }) => {
          // given - when - then
          expect(lottoGameConsole.output.messages.rankDistributionTable(input)).toMatch(output);
        },
      );
    });

    describe('rateOfReturn 메서드 테스트', () => {
      test.each([{ input: '1000', output: '총 수익률은 1000%입니다.' }])(
        '수익률이 $input일 때, 포맷팅 된 메시지는 $output이다.',
        ({ input, output }) => {
          // given - when - then
          expect(lottoGameConsole.output.messages.rateOfReturn(input)).toMatch(output);
        },
      );
    });
  });
});
