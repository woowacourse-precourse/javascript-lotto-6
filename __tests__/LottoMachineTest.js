import LottoMacine from '../src/LottoMachine';

describe('lottoMacine 클래스 테스트', () => {
  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 3000 입력시', () => {
    const lottoMacine = new LottoMacine();

    expect(lottoMacine.generateLotto('3000')).toHaveLength(3);
  });

  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 12000 입력시', () => {
    const lottoMacine = new LottoMacine();

    expect(lottoMacine.generateLotto('12000')).toHaveLength(12);
  });

  test('로또 개수와 번호가 올바르게 나오는지 테스트 2000 입력시', () => {
    const lottoMacine = new LottoMacine();

    expect(lottoMacine.generateLotto('2000')).toHaveLength(2);
  });
});
