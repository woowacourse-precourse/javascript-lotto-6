import GameUtils from '../src/domain/GameUtils.js';
import Lotto from '../src/domain/Lotto.js';

describe('GameUtils 클래스', () => {
  const mockLottos = [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([7, 8, 9, 10, 11, 12]),
  ];

  describe('matchingCountsWithArr 메소드', () => {
    test('당첨 번호를 기반으로 각 로또의 일치하는 숫자 수를 배열로 반환', () => {
      // given
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      // when
      const gameUtils = new GameUtils(mockLottos);
      const matchingCountsArr = gameUtils.matchingCountsWithArr(winningNumbers);

      // then
      expect(matchingCountsArr).toEqual([6, 0]); 
    });
  });

  describe('matchingCountsWithObj 메소드', () => {
    test('일치하는 숫자 배열과 보너스 번호를 기반으로 일치하는 숫자의 개수를 객체로 반환해야 합니다.', () => {
      // given
      const matchingCountsArr = [3, 5]; 
      const bonusNumber = 7;

      // when
      const gameUtils = new GameUtils(mockLottos);
      const matchingCountsObj = gameUtils.matchingCountsWithObj(
        matchingCountsArr,
        bonusNumber
      );

      // then
      expect(matchingCountsObj).toEqual({ 3: 1, bonus: 1 }); 
    });
  });

  describe('processMatchingNumbersToResult 메소드', () => {
    test('일치하는 숫자의 개수를 모아놓은 객체를 당첨결과로 볼 수 있도록 수정', () => {
      // given
      const obj = { 2: 1, 4: 2 };

      // when
      const gameUtils = new GameUtils(mockLottos);
      const result = gameUtils.processMatchingNumbersToResult(obj);

      // then
      expect(result).toEqual({ 3: 0, 4: 2, 5: 0,'bonus':0, 6: 0 }); 
    });
  });

  describe('checkBonusNumberMatch 메소드', () => {
    test('보너스 번호가 일치하면 bonus, 아니면 5를 반환', () => {
      // given
      const bonusLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 6;
      const bonusNumber2 = 7;

      // when
      const gameUtils = new GameUtils(mockLottos);
      const result = gameUtils.checkBonusNumberMatch(bonusLotto, bonusNumber);

      // then
      expect(result).toBe('bonus');

      // when
      const result2 = gameUtils.checkBonusNumberMatch(bonusLotto, bonusNumber2);
      
      // then
      expect(result2).toBe('5');
    });
  });
});
