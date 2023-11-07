import GameUtils from '../src/domain/GameUtils.js';
import Lotto from '../src/domain/Lotto.js';

describe('GameUtils 클래스', () => {
  const mockLottos = [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([7, 8, 9, 10, 11, 12]),
  ];

  describe('generateRandomNumbers 메소드', () => {
    test('1~45까지 중복되지 않는 길이가 6인 랜덤 숫자 배열을 반환.', () => {
      const gameUtils = new GameUtils(mockLottos);
      const randomNumbers = gameUtils.generateRandomNumbers();
      expect(randomNumbers.length).toBe(mockLottos[0].getNumbers().length);
      expect(new Set(randomNumbers).size).toBe(randomNumbers.length);
      randomNumbers.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(45);
      });
    });
  });

  describe('matchingCountsWithArr 메소드', () => {
    test('당첨 번호를 기반으로 각 로또의 일치하는 숫자 수를 배열로 반환', () => {
      const gameUtils = new GameUtils(mockLottos);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const matchingCountsArr = gameUtils.matchingCountsWithArr(winningNumbers);
      expect(matchingCountsArr).toEqual([6, 0]); // 예시 값에 따라 수정
    });
  });

  describe('matchingCountsWithObj 메소드', () => {
    test('일치하는 숫자 배열과 보너스 번호를 기반으로 일치하는 숫자의 개수를 객체로 반환해야 합니다.', () => {
      const gameUtils = new GameUtils(mockLottos);
      const matchingCountsArr = [3, 5]; // 예시 값
      const bonusNumber = 7; // 예시 값
      const matchingCountsObj = gameUtils.matchingCountsWithObj(
        matchingCountsArr,
        bonusNumber
      );
      expect(matchingCountsObj).toEqual({ 3: 1, bonus: 1 }); // 예시 값에 따라 수정
    });
  });

  describe('addOrUpdatePropertyInObj 메소드', () => {
    test('객체에 속성을 추가 또는 업데이트 하고 반환.', () => {
      const gameUtils = new GameUtils(mockLottos);
      const obj = { 2: 1, 4: 2 };
      const newObj = gameUtils.addOrUpdatePropertyInObj(obj, 4);
      expect(newObj).toEqual({ 2: 1, 4: 3 });
    });
  });

  describe('removeItemsWithNumericKeysLessThanThree 메소드', () => {
    test('숫자 키가 3보다 작은 항목을 객체에서 제거.', () => {
      const gameUtils = new GameUtils(mockLottos);
      const obj = { 1: 2, 2: 3, 3: 4, 4: 5 };
      const newObj = gameUtils.removeItemsWithNumericKeysLessThanThree(obj);
      expect(newObj).toEqual({ 3: 4, 4: 5 });
    });
  });

  describe('addMissingElements 메소드', () => {
    it('WINNIG_PROFITS의 키와 일치하는 속성이 객체에 없으면 0으로 초기화해야 합니다.', () => {
      const gameUtils = new GameUtils(mockLottos);
      const obj = { 2: 1, 4: 2 };
      const newObj = gameUtils.addMissingElements(obj);
      expect(newObj).toEqual({ 2: 1, 4: 2, 3: 0, 5: 0,'bonus':0, 6: 0 }); // 예시 값에 따라 수정
    });
  });
  
  describe('processMatchingNumbersToResult 메소드', () => {
    test('일치하는 숫자의 개수를 모아놓은 객체를 당첨결과로 볼 수 있도록 수정 (addMissingElements, removeItemsWithNumericKeysLessThanThree)', () => {
      const gameUtils = new GameUtils(mockLottos);
      const obj = { 2: 1, 4: 2 };
      const result = gameUtils.processMatchingNumbersToResult(obj);
      expect(result).toEqual({ 3: 0, 4: 2, 5: 0,'bonus':0, 6: 0 }); // 예시 값에 따라 수정
    });
  });

  describe('checkBonusNumberMatch 메소드', () => {
    test('보너스 번호가 일치하면 bonus, 아니면 5를 반환', () => {
      const gameUtils = new GameUtils(mockLottos);
      const bonusLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 6;
      const result = gameUtils.checkBonusNumberMatch(bonusLotto, bonusNumber);
      expect(result).toBe('bonus');
      const bonusNumber2 = 7;
      const result2 = gameUtils.checkBonusNumberMatch(bonusLotto, bonusNumber2);
      expect(result2).toBe('5');
    });
  });

  // 나머지 메소드에 대한 테스트도 유사한 방식으로 작성 가능합니다.
});
