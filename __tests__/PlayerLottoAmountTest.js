import { getLogSpy, mockQuestions } from './ApplicationTest';
import LottoController from '../src/controller/LottoController';
import { ERR_MESSAGE } from '../src/constants/message';

describe('로또 구입 금액 입력 테스트', ()=> {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  test('구입 금액이 문자로 입력되면 예외가 발생한다', async ()=>{
    mockQuestions(['6만원']);
    const lottoController = new LottoController();
    await expect(() => lottoController.receivePlayerTotalMoney())
      .rejects.toThrow(ERR_MESSAGE.notNum);
  })

  test('구입 금액이 1000원의 배수가 아니면 예외가 발생한다.', async ()=>{
    mockQuestions(['2000324']);
    const lottoController = new LottoController();
    await expect(() => lottoController.receivePlayerTotalMoney())
      .rejects.toThrow(ERR_MESSAGE.notDividedThousand);
  })

  test('구입 금액이 1000원의 배수라면 로또의 총개수가 계산된다.', async ()=>{
    const logSpy = getLogSpy();
    mockQuestions(['10000']);

    const lottoController = new LottoController();
    await lottoController.receivePlayerTotalMoney();
    lottoController.showLottoAmount();  
    expect(logSpy).toHaveBeenCalledWith('10개를 구매했습니다.');
  })
})