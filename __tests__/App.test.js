import App from '../src/App.js';
import { Console } from '@woowacourse/mission-utils';

describe('class App test', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe('method test : getLottoTicket()', () => {
    test('로또 구입 금액이 11000원이라면 11을 반환할까 ?', () => {
      const testPrice = 11000;
      let testResult = app.getLottoTicket(testPrice);
      expect(testResult).toBe(11);
    });
  });
});
