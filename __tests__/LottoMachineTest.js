import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/Controller/LottoMachine.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getWinningNumSpy = (module) => {
  const winningSpy = jest.spyOn(module, 'createWinningNumber');
  winningSpy.mockClear();
  return winningSpy;
};

const getWinningNumErrorSpy = (module) => {
  const winningSpy = jest.spyOn(module, 'winNumsErrorHandler');
  winningSpy.mockClear();
  return winningSpy;
};

const getBonusNumSpy = (module) => {
  const winningSpy = jest.spyOn(module, 'createBonusNumber');
  winningSpy.mockClear();
  return winningSpy;
};

const getBonusNumErrorSpy = (module) => {
  const winningSpy = jest.spyOn(module, 'bonusNumErrorHandler');
  winningSpy.mockClear();
  return winningSpy;
};

describe('로또 기계 클래스 모듈에 대한 테스트', () => {
  test('당첨 번호 생성 중 예외 발생시 에러 핸들러를 호출하는가?', async () => {
    const inputs = ['123', '1 2 3 4 5 6', '1,2,3,4,5,6'];
    const lottoMachine = new LottoMachine();
    const errorHandleSpy = getWinningNumErrorSpy(lottoMachine);

    mockQuestions(inputs);

    await lottoMachine.createWinningNumber();
    expect(errorHandleSpy).toHaveBeenCalledTimes(2);
  });

  test('당첨 번호 생성 중 예외 발생시 다시 당첨 번호를 입력 받는가?', async () => {
    const inputs = ['123', '1 2 3 4 5 6', '1,2,3,4,5,6'];
    const lottoMachine = new LottoMachine();
    const winningSpy = getWinningNumSpy(lottoMachine);

    mockQuestions(inputs);

    await lottoMachine.createWinningNumber();
    expect(winningSpy).toHaveBeenCalledTimes(3);
  });

  test('보너스 번호 생성 중 예외 발생시 에러 핸들러를 호출하는가?', async () => {
    const inputs = ['123', '1 2 3 4 5 6', '11'];
    const lottoMachine = new LottoMachine();
    const errorSpy = getBonusNumErrorSpy(lottoMachine);

    mockQuestions(inputs);

    await lottoMachine.createBonusNumber();
    expect(errorSpy).toHaveBeenCalledTimes(2);
  });

  test('보너스 번호 생성 중 예외 발생시 다시 보너스 번호를 입력 받는가?', async () => {
    const inputs = ['123', '1 2 3 4 5 6', '11'];
    const lottoMachine = new LottoMachine();
    const bonuseSpy = getBonusNumSpy(lottoMachine);

    mockQuestions(inputs);

    await lottoMachine.createBonusNumber();
    expect(bonuseSpy).toHaveBeenCalledTimes(3);
  });
});
