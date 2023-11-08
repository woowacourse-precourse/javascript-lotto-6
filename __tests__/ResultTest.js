import Lotto from '../src/Lotto';
import WinngingLotto from '../src/domain/WinningLotto';
import Result from '../src/domain/Result';

describe('Result 클래스 테스트', () => {
  const result = new Result();
  const lottos = [
    new Lotto([1, 2, 3, 4, 6, 45]),
    new Lotto([1, 2, 3, 4, 5, 10]),
    new Lotto([1, 2, 3, 4, 6, 10]),
    new Lotto([1, 2, 3, 4, 7, 10]),
    new Lotto([1, 2, 3, 4, 10, 11]),
    new Lotto([1, 2, 3, 10, 11, 12]),
    new Lotto([1, 2, 3, 10, 11, 13]),
    new Lotto([1, 2, 3, 10, 11, 14]),
    new Lotto([1, 2, 3, 10, 11, 15]),
  ];
  const winningLotto = new WinngingLotto('1,2,3,4,5,6', 45);
  result.calculateResult(lottos, winningLotto);

  test('정확한 매치 결과를 반환하는지 확인한다.', () => {
    const answer = [0, 1, 2, 2, 4];

    [...result.getResult().keys()].forEach((key, index) => {
      expect(result.getResult().get(key)).toEqual(answer[index]);
    });
  });

  test('정확한 수익률을 반환하는지 확인한다.', () => {
    const profitRate = result.getProfitRate(lottos.length);
    const answer = 368000.0;

    expect(Number(profitRate)).toEqual(answer);
  });
});
