import { MissionUtils } from '@woowacourse/mission-utils';
import Machine from '../src/LottoMachine.js';

const mockQuestions = (inputs) => {
  const consolePrintSpy = jest.spyOn(MissionUtils.Console, 'print');

  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });

  return consolePrintSpy;
};

describe('Machine', () => {
  it('입력된 금액을 대상으로 로또 구매 개수 구하기', async () => {
    // Arrange
    const machine = new Machine();
    const money = 3000; // 3,000원으로 예상되는 로또 개수: 3개
    const expectedAmount = 3;
    const inputs = ['']; // You can provide any input value you want
    const consolePrintSpy = mockQuestions(inputs);

    // Act
    const amount = machine.CalculatorOfLottoAmount(money);

    // Assert
    expect(amount).toBe(expectedAmount);
    expect(consolePrintSpy).toHaveBeenCalledWith('3개를 구매했습니다.');
  });
});
