import WinningLotto from '../src/model/WinningLotto.js';

describe('당첨 번호 테스트', () => {
  test('숫자가 아닌 값이 있다면 에러처리', () => {
    expect(() => {
      new WinningLotto('1,23,4');
    }).toThrow('[ERROR]');
  });

  test('당첨번호가 6개가 아니라면 에러처리', () => {
    ['2,1', '7,6,5,4,3,2,1', '4,3,2,1'].forEach((nums) => {
      expect(() => {
        new WinningLotto(nums);
      }).toThrow('[ERROR]');
    });
  });

  test('숫자가 1-45의 범위에 없으면 예외 발생', () => {
    ['46,47,100,1004,8282,3434', '1,2,3,4,5,60', '70,60,50,40,30,20'].forEach(
      (number) => {
        expect(() => {
          new WinningLotto(number);
        }).toThrow('[ERROR]');
      },
    );
  });

  test('당첨번호가 6개지만 실질적인 숫자는 5개인 경우 예외 발생', () => {
    expect(() => {
      new WinningLotto('1,2,3,4,5,');
    }).toThrow('[ERROR]');
  });
});
