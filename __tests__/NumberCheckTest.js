/* eslint-disable max-lines-per-function */
import CheckNumber from '../src/Domain/NumberCheck.js';

describe('NumberCheck 테스트', () => {
  describe('sameCount 테스트', () => {
    let randomNum;
    beforeEach(() => {
      randomNum = [
        [1, 2, 3, 4, 5, 7],
        [10, 11, 12, 13, 14, 15],
      ];
    });
    test('맞춘 숫자값만 반환 (보너스 X)', () => {
      const user = [1, 2, 3, 6, 10, 40];
      const bonus = 7;

      const numbers = { randomNum, userNum: { user, bonus } };
      const result = new CheckNumber(numbers).sameCount();

      expect(result).toEqual(expect.arrayContaining(['3개 일치 (5,000원)']));
    });

    test('맞춘 숫자값만 반환 (보너스 O)', () => {
      const user = [1, 2, 3, 4, 5, 40];
      const bonus = 7;

      const numbers = { randomNum, userNum: { user, bonus } };
      const result = new CheckNumber(numbers).sameCount();

      expect(result).toEqual(
        expect.arrayContaining(['5개 일치, 보너스 볼 일치 (30,000,000원)'])
      );
    });

    test('맞춘 숫자가 5개 미만이고, 보너스를 맞췄을 경우', () => {
      const user = [1, 2, 3, 4, 8, 9];
      const bonus = 5;

      const numbers = { randomNum, userNum: { user, bonus } };
      const result = new CheckNumber(numbers).sameCount();

      expect(result).toEqual(expect.arrayContaining(['4개 일치 (50,000원)']));
    });

    test('맞춘 숫자가 3개 미만일 경우', () => {
      const user = [1, 2, 11, 22, 33, 35];
      const bonus = 9;

      const numbers = { randomNum, userNum: { user, bonus } };
      const result = new CheckNumber(numbers).sameCount();

      expect(result).toEqual(expect.arrayContaining([]));
    });
  });

  describe('matchingNumber 테스트', () => {
    let num;

    beforeEach(() => {
      num = [1, 3, 5, 7, 8, 9];
    });
    test('숫자 6개 모두 맞을 경우', () => {
      const user = num;
      const bonus = 19;

      const result = new CheckNumber().matchingNumber(num, { user, bonus });

      expect(result).toEqual(
        expect.stringContaining('6개 일치 (2,000,000,000원')
      );
    });

    test('숫자 5개 맞을 경우 (보너스 O)', () => {
      const user = [1, 3, 5, 7, 8, 10];
      const bonus = 9;

      const result = new CheckNumber().matchingNumber(num, { user, bonus });

      expect(result).toEqual(
        expect.stringContaining('5개 일치, 보너스 볼 일치 (30,000,000원)')
      );
    });

    test('숫자 3개 미만으로 맞을 경우', () => {
      const user = [2, 4, 6, 10, 12, 14];
      const bonus = 9;

      const result = new CheckNumber().matchingNumber(num, { user, bonus });

      expect(result).toEqual(null);
    });
  });

  describe('getSameResult 테스트', () => {
    test('일치하는 수 개수에 따라 결과 반환', () => {
      const matchResult = ['3개 일치 (5,000원)', '4개 일치 (50,000원)'];
      const answer = ['3개 일치 (5,000원) - 1개', '4개 일치 (50,000원) - 1개'];

      const result = new CheckNumber().getSameResult(matchResult);

      // eslint-disable-next-line no-unused-vars
      matchResult.forEach((_) => {
        expect(result).toEqual(expect.arrayContaining(answer));
      });
    });
  });

  describe('getMargin 테스트', () => {
    let randomNum;
    beforeEach(() => {
      randomNum = [
        ['random1'],
        ['random2'],
        ['random3'],
        ['random4'],
        ['random5'],
        ['random6'],
      ];
    });
    test('수익률 반환', () => {
      const total = 600000;

      const result = new CheckNumber({ randomNum }).getMargin(total);

      expect(result).toEqual(10000);
    });

    test('계산된 수익률 소숫점 두자리까지만 반환', () => {
      const total = 500000;
      const result = new CheckNumber({ randomNum }).getMargin(total);

      expect(result).toEqual(8333.33);
    });
  });

  describe('totalAmount 테스트', () => {
    test('최종 금액 합산결과 반환', () => {
      const matchData = [
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      ];

      const result = new CheckNumber().totalAmount(matchData);

      expect(result).toEqual(1555000);
    });

    test('당첨된 경우가 없을 시 합산금액 0 반환', () => {
      const matchData = [
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      ];

      const result = new CheckNumber().totalAmount(matchData);

      expect(result).toEqual(0);
    });
  });
});
