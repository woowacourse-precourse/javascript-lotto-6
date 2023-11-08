import WinningNumbers from '../src/WinningNumbers';

describe('WinningNumbers 클래스 테스트', () => {
  test.each([[[1, 2, 3, 4, 5, 'd']], [['ddd', 3, 4, 5, 6, 7]]])(
    '숫자가 아니면 예외가 발생한다.',
    numbers => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[[1, 2, 3, 4, 5]], [[1, 23, 3, 4, 5, 6, 7]]])(
    '6개 입력하지 않으면 예외가 발생한다.',
    numbers => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 5]], [[3, 3, 4, 5, 6, 7]]])(
    '중복된 숫자가 있으면 예외가 발생한다.',
    numbers => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 99]], [[0, 3, 4, 5, 6, 7]]])(
    '1~45 사이 숫자가 아니면 예외가 발생한다.',
    numbers => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR]');
    },
  );
});
