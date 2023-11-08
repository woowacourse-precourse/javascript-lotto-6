import { PurchaseLotto } from '../src/PurchaseLotto.js';
import { LOTTO_NUMBERS, ERROR_MESSAGE } from '../src/constants.js';
import * as utils from '../src/utils.js';

// utils 모듈의 함수들을 mock 함수로 교체
jest.mock('../src/utils.js', () => ({
  inputLottoNum: jest.fn(),
  parchasedLotto: jest.fn(),
  consoleError: jest.fn(),
}));

describe('PurchaseLotto 클래스', () => {
  let purchaseLotto;

  beforeEach(() => {
    purchaseLotto = new PurchaseLotto();
  });

  test('initialize 함수는 inputLottoNum 함수를 호출하여 inputPrice를 설정한다', async () => {
    // inputLottoNum 함수가 4000을 반환하도록 설정
    utils.inputLottoNum.mockResolvedValue(4000);
    await purchaseLotto.initialize();
    expect(purchaseLotto.inputPrice).toBe(4000);
    expect(purchaseLotto.lottoCount).toBe(4); // 4000원으로 4개의 로또를 살 수 있다고 가정
  });

  test('alertPurchaseLotto 함수는 금액이 로또 단위 금액으로 나누어 떨어지지 않을 때 오류 메시지를 반환한다', async () => {
    purchaseLotto.inputPrice = 4500; // 로또 단위 금액으로 나누어 떨어지지 않는 금액
    const message = await purchaseLotto.alertPurchaseLotto();
    expect(message).toBe(ERROR_MESSAGE.UNIT);
  });

  test('countingLotto 함수는 parchasedLotto 함수를 호출하여 구매된 로또의 수를 반환한다', () => {
    const lottoCount = 5;
    const expectedMessage = `5개를 구매했습니다!`; // 예상되는 반환 메시지
    utils.parchasedLotto.mockReturnValue(expectedMessage); // parchasedLotto 함수가 위 메시지를 반환하도록 설정
    const message = purchaseLotto.countingLotto(lottoCount);
    expect(message).toBe(expectedMessage);
    expect(utils.parchasedLotto).toHaveBeenCalledWith(lottoCount);
  });
});
