import App from '../src/App';
import { Console, Random } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};
describe('App 클래스 테스트', () => {
  test('사용자 input 테스트 1000원 단위 인지', async () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.validatePriceInput('12345');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
  test('lotto 번호 발행 테스트', async () => {
    //given
    // const logSpy = getLogSpy();
    mockRandoms([
      [1, 7, 12, 35, 40, 41],
      [7, 14, 16, 18, 20, 41],
      [2, 16, 19, 24, 30, 31],
      [1, 8, 14, 15, 32, 36],
      [1, 8, 11, 32, 37, 38],
      [3, 6, 16, 22, 36, 40],
      [1, 8, 13, 22, 29, 36],
      [11, 13, 16, 25, 37, 45],
    ]);
    // when
    const app = new App();
    const numbers = app.getLottoNumbers('8000');
    const num = [
      [1, 7, 12, 35, 40, 41],
      [7, 14, 16, 18, 20, 41],
      [2, 16, 19, 24, 30, 31],
      [1, 8, 14, 15, 32, 36],
      [1, 8, 11, 32, 37, 38],
      [3, 6, 16, 22, 36, 40],
      [1, 8, 13, 22, 29, 36],
      [11, 13, 16, 25, 37, 45],
    ];
    expect(num).toEqual(numbers);
  });
});
