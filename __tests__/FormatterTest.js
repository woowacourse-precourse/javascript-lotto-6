import Formatter from '../src/Formatter/index.js';
import Lotto from '../src/Lotto.js';

describe('Formatter 클래스 테스트', () => {
  test('당첨 번호, 보너스 번호를 입력받아 숫자 배열로 반환하는 toNumbers 메서드를 테스트한다.', () => {
    const inputs = ['1,2,3,4,5,6', '2'];
    const lengths = [6, 1];

    inputs.forEach((input, index) => {
      const nums = Formatter.toNumbers(input);

      expect(typeof nums).toBe('object');
      expect(lengths[index]).toEqual(nums.length);

      nums.forEach((num) => {
        expect(typeof num).toBe('number');
      });
    });
  });

  test('구매한 로또를 배열로 포맷팅하여 반환하는 formatLottos 함수를 테스트한다.', () => {
    const numsArray = [
      [1, 2, 3, 4, 5, 6],
      [13, 23, 25, 34, 37, 44],
      [5, 8, 11, 32, 33, 45],
    ];
    const lottos = numsArray.map((num) => new Lotto(num));
    const formattedLottos = Formatter.formatLottos(lottos);

    numsArray.forEach((nums) => {
      nums.forEach((num) => {
        expect(formattedLottos).toContain(String(num));
      });
    });
  });

  test('당첨 통계를 포맷팅하여 반환하는 formatStatistics 함수를 테스트한다.', () => {
    const ranks = { first: 1, second: 0, third: 0, fourth: 0, fifth: 0 };
    const statistics = Formatter.formatStatistics(ranks);

    const outputs = [
      '5개 일치 (1,500,000원) - 0개',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    outputs.forEach((output) => {
      expect(statistics).toContain(output);
    });
  });

  test('당첨 통계와 수익률을 포맷팅하여 최종 결과를 반환하는 formatResult 함수를 테스트한다.', () => {
    const ranks = { first: 1, second: 0, third: 0, fourth: 0, fifth: 0 };
    const revenue = '1000000000.0';
    const statistics = Formatter.formatResult(ranks, revenue);

    const outputs = ['1,000,000,000.0'];

    outputs.forEach((output) => {
      expect(statistics).toContain(output);
    });
  });

  test('수익률을 보기 편한 숫자 형태로 포맷팅하여 반환하는 formatRevenue 함수를 테스트한다.', () => {
    const revenues = ['1000.5', '12325000.0', '20000000.9'];
    const outputs = ['1,000.5', '12,325,000.0', '20,000,000.9'];

    revenues.forEach((revenue, index) => {
      const formattedRevenue = Formatter.formatRevenue(revenue);
      expect(formattedRevenue).toBe(outputs[index]);
    });
  });
});
