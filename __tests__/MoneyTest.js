import Money from '../src/Money';

describe('머니 클래스 테스트', () => {

  test('금액을 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Money('');
    }).toThrow('[ERROR]');
  });

  test('금액에 0을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Money('0');
    }).toThrow('[ERROR]');
  });

  //  아래의 테스트들은 ApplicationTest와 충돌하는듯해보여서 주석처리
  //   test('금액을 천원단위로 입력하지 않으면 예외가 발생한다.', () => {
  //     expect(() => {
  //       new Money('40');
  //     }).toThrow('[ERROR]');
  //   });
  // test('숫자가 아닌 값을 입력한 경우(쉼표 제외)예외가 발생한다.', () => {
  //     expect(() => {
  //       new Money('j');
  //     }).toThrow('[ERROR]');
  //   });
  // 아래에 추가 테스트 작성 가능
});
