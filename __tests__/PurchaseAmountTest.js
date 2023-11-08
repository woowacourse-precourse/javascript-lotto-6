import { PurchaseAmount } from '../src/lotto/index.js';
import { errorConstants } from '../src/constants/index.js';

describe('구입 비용 클래스 테스트', () => {
  test('숫자가 들어왔는지 체크', () => {
    expect(() => {
      new PurchaseAmount(['aosjd']);
    }).toThrow(errorConstants.NOT_A_NUMBER);
  });
  test('입력받은 수 양옆에 공백이 있는지 체크', () => {
    expect(() => {
      new PurchaseAmount(['  1000 ']);
    }).toThrow(errorConstants.NOT_EMPTY);
  });
  test('단위가 제대로 맞는지 체크', () => {
    expect(() => {
      new PurchaseAmount(['1234']);
    }).toThrow(errorConstants.WRONG_UNIT);
  });
});
