import CompareLottoMachine from '../src/CompareLottoMachine.js';
import User from '../src/User.js';
import profitRateCalculator from '../src/util/profitRateCalculator.js';

describe('compareResult 총 결과 테스트', () => {
  describe('총 결과 테스트', () => {
    test('티켓 1장, 3개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '1000';
      const lottos = [[1, 2, 3, 4, 5, 6]];
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);

      // when
      const [statistics] = user.compareResult(compareLottoMachine);

      // then
      expect(statistics).toEqual([
        { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
        { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
        { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
        { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
        { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
      ]);
    });

    test('티켓 2장, 3개짜리 1개, 4개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '2000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
      ];
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);

      // when
      const [statistics] = user.compareResult(compareLottoMachine);

      // then
      expect(statistics).toEqual([
        { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
        { matchCriteria: 4, matchedNumber: 1, prize: 50000 },
        { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
        { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
        { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
      ]);
    });

    test('티켓 3장, 3개짜리 1개, 4개짜리 1개, 5개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '3000';
      const lottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 12, 5, 6],
        [1, 2, 3, 12, 13, 6],
      ];
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);

      // when
      const [statistics] = user.compareResult(compareLottoMachine);

      // then
      expect(statistics).toEqual([
        { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
        { matchCriteria: 4, matchedNumber: 1, prize: 50000 },
        { matchCriteria: 5, matchedNumber: 1, prize: 1500000 },
        { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
        { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
      ]);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);

      // when
      const [statistics] = user.compareResult(compareLottoMachine);

      // then
      expect(statistics).toEqual([
        { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
        { matchCriteria: 4, matchedNumber: 1, prize: 50000 },
        { matchCriteria: 5, matchedNumber: 1, prize: 1500000 },
        { matchCriteria: 5, matchedNumber: 1, prize: 30000000 },
        { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
      ]);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);

      // when
      const [statistics] = user.compareResult(compareLottoMachine);

      // then
      expect(statistics).toEqual([
        { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
        { matchCriteria: 4, matchedNumber: 1, prize: 50000 },
        { matchCriteria: 5, matchedNumber: 1, prize: 1500000 },
        { matchCriteria: 5, matchedNumber: 1, prize: 30000000 },
        { matchCriteria: 6, matchedNumber: 1, prize: 2000000000 },
      ]);
    });
  });

  describe('수익률 테스트', () => {
    test('티켓 1장, 3개짜리 1개 맞춘 경우 테스트 ', () => {
      //given
      const lottoPrice = '1000';
      const lottos = [[1, 2, 3, 4, 5, 6]];
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = profitRateCalculator(profitRate);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = profitRateCalculator(profitRate);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = profitRateCalculator(profitRate);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = profitRateCalculator(profitRate);
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
      const winnigNumbers = '1,2,3,12,13,14';
      const bonusNumber = '7';
      const user = new User(lottoPrice, lottos);
      const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
      const [_, profitRate] = user.compareResult(compareLottoMachine);

      // when
      const result = profitRateCalculator(profitRate);

      // then
      expect(result).toEqual('40,631,100.0');
    });
  });
});
