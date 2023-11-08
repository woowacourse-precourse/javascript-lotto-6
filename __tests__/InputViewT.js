import { Console } from '@woowacourse/mission-utils';
import InputView from '../src/InputView.js';

describe('stringToNumber', () => {
  let input;
  beforeEach(() => {
    input = new InputView();
  });

  it('쉼표를 기준으로 배열에 담기는지 확인', () => {
    const inputString = '1,2,3,4,5';
    const expectedOutput = [1, 2, 3, 4, 5];

    const result = input.stringToNumberArray(inputString);

    expect(result).toEqual(expectedOutput);
  });

  it('보너스 숫자가 숫자형으로 변환되어 저장되는지 확인', async () => {
    // Mock Console.readLineAsync to return a valid bonus number
    const mockInput = '7'; // Mock user input
    Console.readLineAsync = jest.fn().mockResolvedValue(mockInput);
    const result = await input.inputBonusNumber();

    // Expect the result to be a number
    expect(typeof result).toBe('number');
    // Expect the result to be the same as the mock input
    expect(result).toBe(7);
  });
});
