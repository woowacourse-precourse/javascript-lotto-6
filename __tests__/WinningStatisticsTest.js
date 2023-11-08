import winningStatistics from '../src/WinningStatistics';

describe('당첨 통계 클래스 테스트', () => {
  const winningNum = [1, 2, 3, 4, 5, 6];
  const bonusNum = 7;
  const buyMoney = 5000;
  let lottos = [
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7], //보너스 당첨 (2등)
    [2, 3, 4, 5, 6, 8],
    [3, 4, 5, 6, 7, 8],
    [4, 5, 6, 7, 8, 9],
  ];
  const result = new winningStatistics(lottos, bonusNum, winningNum, buyMoney);
  test('몇개의 숫자가 일치하는 지 알 수 있다.', () => {
    const expectedSameNum = [6, 5, 5, 4, 3];
    result.result;
    expect(result.result).toEqual(expectedSameNum);
  });

  test('보너스 번호 일치 여부를 알 수 있다.', () => {
    const expectBonusStatus = [false, true, false, true, true]; //7 포함시 보너스 번호 포함
    expect(result.winningBonusNum).toEqual(expectBonusStatus);
  });

  test('등 수 별로 당첨된 로또의 개수를 알 수 있다.', () => {
    const expectRank = [0, 1, 1, 1, 1, 1]; //index값대로 등수 설정

    expect(result.rank).toEqual(expectRank);
  });

  test('올바른 수익률을 구할 수 있다.', () => {
    const newLottos = [[1, 2, 3, 14, 15, 16]];
    const newResult = new winningStatistics(
      newLottos,
      bonusNum,
      winningNum,
      1000
    );

    const expectRateOfReturn = 500;

    newResult.checkRevenue();

    expect(newResult.rateOfReturn).toEqual(expectRateOfReturn);
  });
  test('수익률을 소수점 둘째자리에서 반올림 할 수 있다.', () => {
    const roundedValue = result.calculateRevenue(11.55);
    expect(roundedValue).toEqual(11.6);
  });
});
