import Lotto from '../src/Lotto.js';
import ERROR_MESSAGE from '../src/constants/error.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '6', '7']);
    }).toThrow(ERROR_MESSAGE.invalidLottoLength);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '5']);
    }).toThrow(ERROR_MESSAGE.duplicatedLottoNum);
  });

  // 아래에 추가 테스트 작성 가능
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    const winningLottoList = [
      ['', '2', '3', '4', '5', '6'],
      [' ', '2', '3', '4', '5', '6'],
      ['1f', '2', '3', '4', '5', '6'],
    ];

    winningLottoList.forEach((lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow(ERROR_MESSAGE.notNumber);
    });
  });

  test('1부터 45사이의 수가 아니면 예외가 발생한다.', () => {
    const winningLottos = [
      ['0', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '46'],
    ];
    expect(() => {
      winningLottos.forEach((lotto) => {
        new Lotto(lotto);
      });
    }).toThrow(ERROR_MESSAGE.invalidLottoNumRange);
  });
});
