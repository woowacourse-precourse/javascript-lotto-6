import CompareLottoMachine from '../src/CompareLottoMachine.js';
import User from '../src/User.js';
import roundAndFormatWithComma from '../src/util/roundAndFormatWithComma.js';

describe('compareResult 총 결과 테스트', () => {
  describe('수익률 테스트', () => {
    let compareLottoMachine;

    beforeEach(() => {
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
    });

    test('맞춘 개수가 2개인 경우 테스트', () => {
      //given
      const lottoPrice = '1000';
      const lottos = [[1, 2, 35, 4, 5, 6]];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);
      // then
      expect(result).toEqual('0.0');
    });

    test('티켓 1장, 3개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '1000';
      const lottos = [[1, 2, 3, 4, 5, 6]];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);
      // then
      expect(result).toEqual('500.0');
    });

    test('티켓 2장, 3개짜리 1개, 4개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '2000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
      ];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);
      // then
      expect(result).toEqual('2,750.0');
    });

    test('티켓 3장, 3개짜리 1개, 4개짜리 1개, 5개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '3000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
        [1, 2, 3, 12, 13, 6],
      ];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);
      // then
      expect(result).toEqual('51,833.3');
    });

    test('티켓 4장, 3개짜리 1개, 4개짜리 1개, 5개짜리 1개, 5개 + 보너스 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '4000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
        [1, 2, 3, 12, 13, 6],
        [1, 2, 3, 7, 12, 13],
      ];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);
      // then
      expect(result).toEqual('788,875.0');
    });

    test('티켓 5장, 3개짜리 1개, 4개짜리 1개, 5개짜리 1개, 5개 + 보너스 1개, 6개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '5000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
        [1, 2, 3, 12, 13, 6],
        [1, 2, 3, 7, 12, 13],
        [1, 2, 3, 12, 13, 14],
      ];
      const user = new User(lottoPrice, lottos);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = roundAndFormatWithComma(profitRate, 1);

      // then
      expect(result).toEqual('40,631,100.0');
    });
  });
});
