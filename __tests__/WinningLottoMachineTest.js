import { MissionUtils } from '@woowacourse/mission-utils';
import WinningLottoMachine from '../src/domains/WinningLottoMachine';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('WinningLottoMachine 클래스 테스트', () => {
  test('당첨 번호와 보너스 번호를 생성한다.', async () => {
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
});
