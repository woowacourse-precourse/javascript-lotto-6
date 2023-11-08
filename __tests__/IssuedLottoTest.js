import IssuedLotto from '../src/model/IssuedLotto.js';

describe('IssuedLotto 클래스 테스트', () => {
  test('입력된 금액에 문자가 섞여 있으면 예외가 발생한다.', () => {
    expect(() => {
      new IssuedLotto('abc1000');
    }).toThrow('[ERROR]');
  });
  test('입력된 금액에 특수번호가 섞여 있으면 예외가 발생한다.', () => {
    expect(() => {
      new IssuedLotto('1000!!!');
    }).toThrow('[ERROR]');
  });
  test('입력된 금액이 1000 단위가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      new IssuedLotto('1500');
    }).toThrow('[ERROR]');
  });
  test('입력된 금액이 0일 경우 예외가 발생한다.', () => {
    expect(() => {
      new IssuedLotto('0');
    }).toThrow('[ERROR]');
  });
  test('입력된 금액이 음수일 경우 예외가 발생한다.', () => {
    expect(() => {
      new IssuedLotto('0');
    }).toThrow('[ERROR]');
  });
  test('3000원 어치 구입하면 발행 로또의 개수는 3개이다.', () => {
    const issuedLotto = new IssuedLotto('3000');
    issuedLotto.createLottos();
    expect(issuedLotto.getCount()).toBe(3);
    expect(issuedLotto.getList().length).toBe(3);
  });
});
