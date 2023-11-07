import Controller from '../src/model/Controller';
import Lotto from '../src/model/Lotto';

describe('Controller', () => {
  let controller;

  beforeEach(() => {
    controller = new Controller();
  });

  it('구매 금액에 따른 데이터 검사', () => {
    const money = 12000;
    controller.purchaseLotto(money);

    expect(controller.money).toEqual(money);
    expect(controller.buyNum).toEqual(12);
    expect(controller.lottoArrays.length).toEqual(12);
  });

  it('구매할 금액 검사', () => {
    expect(() => {
      controller.validatePay('a'); // 10001 is not a multiple of the UNIT.
    }).toThrow('[ERROR]');

    expect(() => {
      controller.validatePay(10001); // 10001 is not a multiple of the UNIT.
    }).toThrow('[ERROR]');

    expect(() => {
      controller.validatePay(0); // 0 money is not valid.
    }).toThrow('[ERROR]');
  });

  it('보너스 넘버 중복 검사', () => {
    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum(1);
    }).toThrow('[ERROR]');
  });

  it('보너스 넘버 범위 검사', () => {
    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum(0);
    }).toThrow('[ERROR]');

    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum(500);
    }).toThrow('[ERROR]');
  });

  it('보너스 넘버 number 검사', () => {
    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum('a1');
    }).toThrow('[ERROR]');

    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum('a');
    }).toThrow('[ERROR]');

    expect(() => {
      controller.setWinNumber('1,2,3,4,5,6');
      controller.setBonusNum('1.');
    }).toThrow('[ERROR]');
  });
});
