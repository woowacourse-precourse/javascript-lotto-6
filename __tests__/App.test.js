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

  describe('method test : checkLottoPrice()', () => {
    test('로또 구입 금액이 1000 미만이면 오류가 발생할까?', () => {
      const testPrice = 900;
      expect(() => {
        app.checkLottoPrice(testPrice);
      }).toThrow('[ERROR] 로또 최소 구입 금액은 1000원입니다.');
    });
  });
});
