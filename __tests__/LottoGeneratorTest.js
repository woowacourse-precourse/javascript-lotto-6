import LottoGameResultCalculator from '../src/Components/LottoGameResultCalculator.js';
import LottoGenerator from '../src/Components/LottoGenerator.js';
import Lotto from '../src/Lotto.js';

describe('로또 생성기(LottoGenerator) 클래스 테스트', () => {
  test('생성할 로또 개수를 구한다.', () => {
    const lottoGenerator = new LottoGenerator();
    const purchaseAmount = 5000;

    expect(lottoGenerator.getNumberOfLottos(purchaseAmount)).toEqual(5);
  });
  test('생성된 로또 번호의 개수가 6개인지 확인한다.', () => {
    const lottoGenerator = new LottoGenerator();

    expect(lottoGenerator.generateLottoNumbers().length).toEqual(6);
  });
  test('생성된 로또 번호로 로또 클래스를 생성한다.', () => {
    const lottoGenerator = new LottoGenerator();
    const lottoNumbers = lottoGenerator.generateLottoNumbers();
    expect(lottoGenerator.generateLotto(lottoNumbers)).toBeInstanceOf(Lotto);
  });
  test('구입 금액에 해당하는 만큼 로또를 생성한다.', () => {
    const lottoGenerator = new LottoGenerator();
    const purchaseAmount = 5000;
    expect(lottoGenerator.generateLottos(purchaseAmount).length).toEqual(5);
  });
});
