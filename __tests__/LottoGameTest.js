import LottoGame from '../src/lotto/LottoGame.js';
import LottoStore from '../src/lotto/LottoStore.js';
import LottoGameHost from '../src/lotto/LottoGameHost.js';
import LottoCenter from '../src/lotto/LottoCenter.js';

jest.mock('../src/lotto/LottoStore.js');
jest.mock('../src/lotto/LottoGameHost.js');
jest.mock('../src/lotto/LottoCenter.js');
jest.mock('../src/utility/console.js');

describe('LottoGame 클래스 테스트', () => {
  let lottoGame;

  beforeEach(() => {
    const mockLottoStore = new LottoStore();
    mockLottoStore.setLottoStore = jest.fn();
    mockLottoStore.publishLottos = jest.fn();

    const mockLottoCenter = new LottoCenter();
    mockLottoCenter.tryPrintAllLottoNumbers = jest.fn();

    LottoStore.mockImplementation(() => mockLottoStore);
    LottoCenter.mockImplementation(() => mockLottoCenter);

    lottoGame = new LottoGame();
  });

  test('buyAndIssueLottos 메소드가 정상적으로 동작하는지 테스트', async () => {
    await lottoGame.buyAndIssueLottos();

    expect(lottoGame.lottoStore.setLottoStore).toHaveBeenCalled();
    expect(lottoGame.lottoCenter.tryPrintAllLottoNumbers).toHaveBeenCalled();
  });

  test('calculateReturnRate 메소드가 정상적으로 동작하는지 테스트', () => {
    const money = 1000000;
    const resultRate = '16.0';
    const lottoResultsList = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 1,
      fifth: 22,
    };

    const returnRate = lottoGame.calculateReturnRate(money, lottoResultsList);
    expect(returnRate).toBe(resultRate);
  });

  test('getAndPrintResults 메소드가 정상적으로 동작하는지 테스트', () => {
    const mockLottoGameHost = new LottoGameHost();
    mockLottoGameHost.getWinningNumbers = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, 6]);
    mockLottoGameHost.getBonusNumber = jest.fn().mockReturnValue(7);

    const mockLottoCenter = new LottoCenter();
    mockLottoCenter.inspectLottoWinningStatus = jest.fn();
    mockLottoCenter.getLottoResultsList = jest.fn().mockReturnValue({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 5,
    });

    LottoGameHost.mockImplementation(() => mockLottoGameHost);
    LottoCenter.mockImplementation(() => mockLottoCenter);

    lottoGame.lottoCenter = mockLottoCenter;

    lottoGame.getAndPrintResults();

    expect(lottoGame.lottoCenter.inspectLottoWinningStatus).toHaveBeenCalled();
  });

  test('getAndPrintReturnRate 메소드가 정상적으로 동작하는지 테스트', () => {
    const mockLottoCenter = new LottoCenter();
    mockLottoCenter.getLottoResultsList = jest.fn().mockReturnValue({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 5,
    });

    LottoCenter.mockImplementation(() => mockLottoCenter);

    const printModule = require('../src/utility/console.js');
    const printSpy = jest.spyOn(printModule, 'print');

    lottoGame.getAndPrintReturnRate(mockLottoCenter.getLottoResultsList());
    expect(printSpy).toHaveBeenCalled();
  });
});

describe('DOMAIN: 수익률 계산 함수 검증', ()=>{
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test('1000원으로 아무 숫자도 맞추지 못한 경우 테스트', () => {
    const money = 1000;
    const expectedReturnRate = '0.0';
    const lottoResultsList = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    expect(lottoGame.calculateReturnRate(money, lottoResultsList)).toBe(expectedReturnRate);
  });

  test('1000원으로 1등에 당첨된 경우 테스트', () => {
    const money = 1000;
    const expectedReturnRate = '200000000.0';
    const lottoResultsList = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    expect(lottoGame.calculateReturnRate(money, lottoResultsList)).toBe(expectedReturnRate); 
  });

  test('5000원으로 2등 1개, 4등 1개, 5등 2개 당첨인 경우 테스트', () => {
    const money = 5000;
    const expectedReturnRate = '601200.0';
    const lottoResultsList = {
      first: 0,
      second: 1,
      third: 0,
      fourth: 1,
      fifth: 2,
    };

    expect(lottoGame.calculateReturnRate(money, lottoResultsList)).toBe(expectedReturnRate);
  });

  test('15000원으로 1등 1개, 2등 2개, 3등 3개, 4등 4개, 5등 5개 당첨인 경우 테스트', () => {
    const money = 15000;
    const expectedReturnRate = '13764833.3';
    const lottoResultsList = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
    };

    expect(lottoGame.calculateReturnRate(money, lottoResultsList)).toBe(expectedReturnRate);
  });
});