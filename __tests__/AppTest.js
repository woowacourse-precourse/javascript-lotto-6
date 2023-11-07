import App from '../src/App';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('App 클래스 테스트', () => {
  test('사용자 input 테스트 1000원 단위 인지', async () => {
    const app = new App();
    const logSpy = getLogSpy();
    await app.validatePriceInput('12345');
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining('[ERROR]'),
      })
    );
  });
});
