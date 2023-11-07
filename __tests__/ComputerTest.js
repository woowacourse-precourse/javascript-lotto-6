import Computer from '../src/Computer';
import Lotto from '../src/Lotto';

describe('로또 컴퓨터 클래스 테스트', () => {
  const winnnersNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const numbers = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];
  const cost = 8000;

  test('생성된 로또들의 번호와 당첨 번호, 보너스 번호를 비교한 결과를 최종 산출에 반영한다.', () => {
    const computer = new Computer(winnnersNumbers, bonusNumber, cost);
    const lottos = numbers.map((elem) => new Lotto(elem));
    computer.setPrizeResult(lottos);

    expect(computer.getPrizeResult()).toEqual({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    });
  });

  test('최종 산출된 등수의 결과를 바탕으로 수익률을 계산한다.', () => {
    const computer = new Computer(winnnersNumbers, bonusNumber, cost);
    const lottos = numbers.map((elem) => new Lotto(elem));
    computer.setPrizeResult(lottos);

    expect(computer.getProfitRatio()).toEqual('62.5%');
  });
});
