import { LOTTO_LENGTH } from '../src/Constants';
import Utils from '../src/Utils.js';

describe('Utils', () => {
  describe('splitComma 메소드', () => {
    test('입력 문자열을 쉼표로 분리하고 배열로 반환', () => {
      const result = Utils.splitComma('1,2,3,4');
      expect(result).toEqual(['1', '2', '3', '4']);
    });
  });

  describe('sortLottoNumbers 메소드', () => {
    test('각각의 로또 번호들을 오름차순으로 정렬', () => {
      const result = Utils.sortLottoNumbers([
        [3, 1, 4, 2, 7, 9],
        [2, 5, 6, 29, 11, 32],
      ]);
      expect(result).toEqual([
        [1, 2, 3, 4, 7, 9],
        [2, 5, 6, 11, 29, 32],
      ]);
    });
  });

  describe('generateRandomNumbers 메소드', () => {
    test('1~45까지 중복되지 않는 길이가 6인 랜덤 숫자 배열을 반환', () => {
      const randomNumbers = Utils.generateRandomNumbers();
      expect(randomNumbers.length).toBe(LOTTO_LENGTH);
      expect(new Set(randomNumbers).size).toBe(randomNumbers.length);
      randomNumbers.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(45);
      });
    });
  });

  describe('addOrUpdatePropertyInObj 메소드', () => {
    test('객체에 속성을 추가 또는 업데이트 하고 반환', () => {
      // given
      const OBJ = { 2: 1, 4: 2 };

      // when
      const newObj = Utils.addOrUpdatePropertyInObj(OBJ, 4);
      
      // then
      expect(newObj).toEqual({ 2: 1, 4: 3 });
    });
  });

  describe('removeItemsWithNumericKeysLessThanThree 메소드', () => {
    test('숫자 키가 3보다 작은 항목을 객체에서 제거', () => {
      // given
      const OBJ = { 1: 2, 2: 3, 3: 4, 4: 5 };

      // when
      const newObj = Utils.removeItemsWithNumericKeysLessThanThree(OBJ);

      // then
      expect(newObj).toEqual({ 3: 4, 4: 5 });
    });
  });

  describe('addMissingElements 메소드', () => {
    test('WINNIG_PROFITS의 키와 일치하는 속성이 객체에 없으면 0으로 초기화하여 추가', () => {
      // given
      const OBJ = { 2: 1, 4: 2 };

      // when
      const newObj = Utils.addMissingElements(OBJ);

      // then
      expect(newObj).toEqual({ 2: 1, 4: 2, 3: 0, 5: 0,'bonus':0, 6: 0 }); // 예시 값에 따라 수정
    });
  });
});
