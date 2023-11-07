import {
  getLottoCntFromInputMoney,
  getWinningLottoArray,
} from '../src/utils/getUserInput';

describe('구매금액 입력 함수 테스트', () => {
  test('입력한 구매금액의 값이 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      getLottoCntFromInputMoney('98kiyeol');
    }).toThrow('[ERROR]');
  });

  test('입력한 구매금액의 값이 정수가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      getLottoCntFromInputMoney('1234');
    }).toThrow('[ERROR]');
  });

  test('구매 금액의 1/1000에 해당하는 로또의 갯수가 정상적으로 출력된다.', () => {
    expect(getLottoCntFromInputMoney('8000')).toBe(8);
  });
});

describe('당첨번호 입력 함수 테스트', () => {
  test('쉼표를 기준으로 구분하여 올바른 배열을 생성한다.', () => {
    expect(getWinningLottoArray('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
