import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('App - generateLottos() 테스트', () => {
  test('주어진 수량에 맞는 로또를 생성한다.', () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();

    const amount = 4;
    const app = new App();
    app.generateLottos(amount);

    expect(logSpy).toHaveBeenCalledTimes(amount);
  });
});
