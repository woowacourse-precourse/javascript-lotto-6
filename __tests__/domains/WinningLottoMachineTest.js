import { ERROR_MESSAGES } from '../../src/constants/messages';
import { MissionUtils } from '@woowacourse/mission-utils';
import WinningLottoMachine from '../../src/domains/WinningLottoMachine';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('WinningLottoMachine 클래스 테스트', () => {
  test('올바른 당첨 번호와 보너스 번호를 생성한다.', async () => {
    // Arrange
    const winningNumbers = '1,2,3,4,5,6';
    const bonusNumber = '7';

    mockQuestions([winningNumbers, bonusNumber]);
    // Act
    const machine = await WinningLottoMachine.machineStart();

    // Assert
    const expectedWinningNumbers = [1, 2, 3, 4, 5, 6];
    const expectedBonusNumber = 7;

    expect(machine.winningNumbers).toEqual(expectedWinningNumbers);
    expect(machine.bonusNumber).toEqual(expectedBonusNumber);
  });

  test('당첨 번호가 중복되면 예외 문구를 출력하고 올바른 당첨 번호를 다시 입력한다.', async () => {
    // Arrange
    const logSpy = getLogSpy();

    const errorWinningNumbers = '1,2,3,4,5,5';

    const correctWinningNumbers = '1,2,3,4,5,6';
    const bonusNumber = '7';

    mockQuestions([errorWinningNumbers, correctWinningNumbers, bonusNumber]);
    // Act
    const machine = await WinningLottoMachine.machineStart();

    // Assert
    const expectedErrorMessage = ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate;

    const expectedWinningNumbers = [1, 2, 3, 4, 5, 6];
    const expectedBonusNumber = 7;

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedErrorMessage));
    expect(machine.winningNumbers).toEqual(expectedWinningNumbers);
    expect(machine.bonusNumber).toEqual(expectedBonusNumber);
  });

  test('보너스 번호가 중복되면 예외 문구를 출력하고 올바른 보너스 번호를 다시 입력한다.', async () => {
    // Arrange
    const logSpy = getLogSpy();

    const beforeWinningNumbers = '1,2,3,4,5,6';
    const errorBonusNumber = '6';

    const afterWinningNumbers = '1,2,3,4,5,6';
    const correctBonusNumber = '7';

    mockQuestions([beforeWinningNumbers, errorBonusNumber, afterWinningNumbers, correctBonusNumber]);
    // Act
    const machine = await WinningLottoMachine.machineStart();

    // Assert
    const expectedErrorMessage = ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate;

    const expectedWinningNumbers = [1, 2, 3, 4, 5, 6];
    const expectedBonusNumber = 7;

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedErrorMessage));
    expect(machine.winningNumbers).toEqual(expectedWinningNumbers);
    expect(machine.bonusNumber).toEqual(expectedBonusNumber);
  });
});
