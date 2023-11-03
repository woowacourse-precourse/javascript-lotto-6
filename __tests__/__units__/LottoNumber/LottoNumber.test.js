describe('LottoNumber 테스트', () => {
  it.each([{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }])(
    '`equal(number)` 호출 시 같은 인스턴스인지 비교한다.',
    ({ number }) => {
      // given
      const lottoNumber = LottoNumber.valueOf(number);

      // when
      const result = lottoNumber.equal(LottoNumber.valueOf(number));

      // then

      expect(result).toBeTruthy();
    },
  );
});
