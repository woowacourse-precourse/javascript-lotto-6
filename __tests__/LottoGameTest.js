import LottoGame from '../src/lottogame/LottoGame.js';
import Output from '../src/view/Output.js';
import ProfitRate from '../src/calculation/ProfitRate.js';

jest.mock('../src/lottogame/MakeLottoNumber.js', () => ({
  makeNumber: jest.fn(() => [1, 2, 3, 4, 5, 6]),
}));

describe('LottoGame 클래스 테스트', () => {
  test('printResult 함수가 당첨 통계 문구를 출력하는지 확인한다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.matching = [2, 1, 0, 0, 0];

    const outputSpy = jest.spyOn(Output, 'text');

    lottoGame.printResult();

    const print = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 2개',
    ];

    expect(outputSpy).toHaveBeenCalledWith(print[0]);
    expect(outputSpy).toHaveBeenCalledWith(print[1]);
    expect(outputSpy).toHaveBeenCalledWith(print[2]);

    outputSpy.mockRestore();
  });

  test('checkCount 함수에서 주어진 요소와 일치하는 요소의 수를 반환하는지 확인한다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.matching = [2, 1, 1, 0, 0];

    const count = lottoGame.checkCount(1);

    expect(count).toBe(2);
  });

  test('printProfitRate 함수가 올바른 수익률을 출력하는지 확인한다.', () => {
    const lottoGame = new LottoGame();
    const outputSpy = jest.spyOn(Output, 'text');
    const expectedProfitRate = `총 수익률은 ${ProfitRate.calculate(
      lottoGame.purchaseCost,
      lottoGame.profit,
    )}%입니다.`;

    lottoGame.printProfitRate();

    expect(outputSpy).toHaveBeenCalledWith(expectedProfitRate);
    outputSpy.mockRestore();
  });
});
