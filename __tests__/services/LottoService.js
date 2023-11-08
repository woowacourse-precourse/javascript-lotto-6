import { MissionUtils } from '@woowacourse/mission-utils';
import Account from '../../src/models/Account';
import LottoService from '../../src/services/LottoService';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoService 테스트', () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  test(`초기화 되었을 때 구입 금액 0원을 반환할 수 있다.`, () => {
    expect(lottoService.getPurchaseAmount()).toBe(0);
  });

  test(`입력한 금액 1000원에 대해 1000원 단위로 나눈 1개의 로또를 구매할 수 있다.`, () => {
    lottoService.setPurchaseAmount(1000);

    lottoService.buyLottos();

    expect(lottoService.getLottos()).toHaveLength(1);
  });

  test(`입력한 금액 2000원에 대해 1000원 단위로 나눈 2개의 로또를 구매할 수 있다.`, () => {
    lottoService.setPurchaseAmount(2000);

    lottoService.buyLottos();

    expect(lottoService.getLottos()).toHaveLength(2);
  });

  test(`당첨 번호를 설정할 수 있다.`, () => {
    const input = [1, 2, 3, 4, 5, 6];

    lottoService.setWinningNumbers(input);

    expect(lottoService.getWinningNumbers()).toBeDefined();
  });

  test(`당첨 번호를 반환할 수 있다.`, () => {
    const input = [1, 2, 4, 3, 5, 6];

    lottoService.setWinningNumbers(input);

    expect(lottoService.getWinningNumbers()).toEqual(input);
  });

  test(`보너스 번호를 설정할 수 있다.`, () => {
    const input = 7;

    lottoService.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoService.setBonusNumber(input);

    expect(lottoService.getBonusNumber()).toBeDefined();
  });

  test(`보너스 번호를 반환할 수 있다.`, () => {
    const input = 7;

    lottoService.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoService.setBonusNumber(input);

    expect(lottoService.getBonusNumber()).toEqual(input);
  });

  test('당첨 결과를 반환할 수 있다.', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = {
      firstPrizeCount: 1,
      secondPrizeCount: 0,
      thirdPrizeCount: 0,
      fourthPrizeCount: 0,
      fifthPrizeCount: 0,
    };

    mockRandoms([input]);
    lottoService.setPurchaseAmount(1000);
    lottoService.buyLottos();
    lottoService.setWinningNumbers(input);
    lottoService.setBonusNumber(7);

    expect(lottoService.getLottoResult()).toEqual(output);
  });

  test('당첨 결과의 총 수익률을 반환할 수 있다.', () => {
    const input = [1, 2, 3, 4, 5, 6];

    mockRandoms([input]);
    lottoService.setPurchaseAmount(1000);
    lottoService.buyLottos();
    lottoService.setWinningNumbers(input);
    lottoService.setBonusNumber(7);

    expect(lottoService.getLottoTotalReturns()).toBe('200000000.0');
  });
});
