import LottoGameHost from '../src/lotto/LottoGameHost.js';
import { getAndValidateInput } from '../src/utility/console.js';

jest.mock('../src/utility/console.js', () => ({
  getAndValidateInput: jest.fn(),
}));

describe('LottoGameHost 클래스 테스트', () => {
  let lottoGameHost;

  beforeEach(() => {
    lottoGameHost = new LottoGameHost();
  });

  test('setLottoWinningNumbers 메소드가 winningNumbers와 bonusNumber를 정상적으로 세팅하는지 테스트', async () => {
    const winningNumbersInput = '1,2,3,4,5,6';
    const bonusNumberInput = '7';
    getAndValidateInput
      .mockResolvedValueOnce(winningNumbersInput)
      .mockResolvedValueOnce(bonusNumberInput);

    await lottoGameHost.setLottoWinningNumbers();

    expect(lottoGameHost.getWinningNumbers()).toEqual(
      winningNumbersInput.split(',').map(Number),
    );
    
    expect(lottoGameHost.getBonusNumber()).toBe(Number(bonusNumberInput));
  });
});