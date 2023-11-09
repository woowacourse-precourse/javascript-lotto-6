import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  describe('로또 번호 생성 시 예외 발생', () => {
    describe('로또 번호 개수 예외 발생', () => {
      // given
      const countCase = [
        { input: [] },
        { input: [1] },
        { input: [1, 2] },
        { input: [1, 2, 3] },
        { input: [1, 2, 3, 4] },
        { input: [1, 2, 3, 4, 5] },
      ];

      test.each(countCase)(
        '로또 번호의 개수가 6개 미만이면 예외가 발생한다.',
        ({ input }) => {
          // when
          const lotto = () => new Lotto(input);

          // then
          expect(lotto).toThrow('[ERROR]');
        },
      );
    });

    describe('로또 번호 양의 정수 이외의 값 입력 시 예외 발생', () => {
      test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
        // given
        const input = ['일', 2, 3, '4', 'five', 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });

      test('로또 번호에 특수 문자가 있으면 예외가 발생한다.', () => {
        // given
        const input = ['$', 2, 3, '=', '@@', 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });

      test('로또 번호에 소수가 있으면 예외가 발생한다.', () => {
        // given
        const input = [9.1, 2, 3, 4.2, 43.8, 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });

      test('로또 번호에 빈 값 있으면 예외가 발생한다.', () => {
        // given
        const input = ['', 2, 3, '', 5, 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });
    });

    describe('로또 번호 1~45 이외의 값 입력 시 예외 발생', () => {
      test('로또 번호에 1 미만 값이 있으면 예외가 발생한다.', () => {
        // given
        const input = [-1, 2, 3, 0.4, -23.7, 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });

      test('로또 번호에 45 초과 값이 있으면 예외가 발생한다.', () => {
        // given
        const input = [54, 2, 3, 234, 467, 6];

        // when
        const lotto = () => new Lotto(input);

        // then
        expect(lotto).toThrow('[ERROR]');
      });
    });

    describe('Lotto클래스 메서드 테스트', () => {
      test('번호가 오름차순으로 잘 정렬되어 반환되는지 getNumber 메서드 테스트', () => {
        // given
        const input = [3, 5, 2, 4, 6, 1];
        const output = [1, 2, 3, 4, 5, 6];

        // when
        const lotto = new Lotto(input);
        const sortLotto = lotto.getNumber();

        // then
        expect(sortLotto).toEqual(output);
      });
    });
  });
});
