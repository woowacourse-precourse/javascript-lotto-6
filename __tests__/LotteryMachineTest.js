import LotteryMachine from "../src/domain/LotteryMachine.js";

describe('로또 티켓 발행기 클래스 테스트', () => {
  test('문자타입 구입 금액을 넣으면 올바른 수량의 로또가 발행 되었는가?', () => {
    const lottoTicketLength = 10;
    const lotteryMachine = new LotteryMachine('10000');
    
    expect(lotteryMachine.getTiket().length).toEqual(lottoTicketLength);
  });

  test('숫자형 문자가 아니면 에러 발생', () => {
    expect(() => {
      new LotteryMachine('a')
    }).toThrow('[ERROR] 올바른 형식이 아닙니다.');
  });

  test("구매 한도 10만원을 넘으면 에러 발생", () => {
    expect(() => {
      new LotteryMachine('120000')
    }).toThrow('[ERROR] 로또는 1인당 최대 10만원 까지 구매 가능합니다.');
  });

  test('구매 단위가 1000원이 아닐시 에러 발생', () => {
    expect(() => {
      new LotteryMachine('2900')
    }).toThrow('[ERROR] 로또 구매 단위는 1000원 입니다.');
  });

  test('금액이 모자라면 에러 발생', () => {
    expect(() => {
      new LotteryMachine('500')
    }).toThrow('[ERROR] 금액이 부족합니다. 로또 한개의 금액은 1000원 입니다.');
  });
});
