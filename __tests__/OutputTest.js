import { Console, MissionUtils } from '@woowacourse/mission-utils';
import INPUT_VIEW from '../src/View/inputView.js';
import OUTPUT_VIEW from '../src/View/outputView.js';
import Publish from '../src/Publish.js';

const mockfn = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => Promise.resolve(input));
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Output View Test', () => {
  test('로또 구입 개수 출력 테스트', async () => {
    const input = '5000';
    mockfn(input);
    const count = await INPUT_VIEW.inputPrice();
    const logSpy = getLogSpy();

    OUTPUT_VIEW.outputLottoCount(count);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('5개를 구매했습니다.'),
    );
  });

  test('로또 발행 출력 테스트', async () => {
    const count = 5;
    const logSpy = getLogSpy();
    const publish = new Publish(count);
    for (let i = 0; i < count; i += 1) {
      expect(logSpy).toHaveBeenCalledWith(publish.publish[i]);
    }
  });
});
