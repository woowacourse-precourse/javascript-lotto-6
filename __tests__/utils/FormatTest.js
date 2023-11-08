import Format from '../../src/utils/Format';

describe('Format 클래스 테스트', () => {
  describe('money 메서드 테스트', () => {
    it('한국 돈의 형태로 변환한다.', () => {
      // given
      const testValue = [1_000, 10_000, 100_000];
      const expectedValue = ['1,000원', '10,000원', '100,000원'];

      // when
      const result = testValue.map((value) => Format.money(value));

      // then
      expect(result).toEqual(expectedValue);
    });
  });

  describe('array', () => {
    it('배열을 대괄호([])로 감싸고, 콤마(,)로 구분된 문자열로 변환한다.', () => {
      // given
      const testValue = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expectedValue = ['[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]'];

      // when
      const result = testValue.map((value) => Format.array(value));

      // then
      expect(result).toEqual(expectedValue);
    });
  });

  describe('rate 메서드 테스트', () => {
    it('두번째 자리수에서 반올림한 소수의 형태에 퍼센트(%) 기호를 붙인 문자열로 변환한다.', () => {
      // given
      const testValue = [1.234, 23.456, 100];
      const expectedValue = ['1.2%', '23.5%', '100.0%'];

      // when
      const result = testValue.map((value) => Format.rate(value));

      // then
      expect(result).toEqual(expectedValue);
    });
  });
});
