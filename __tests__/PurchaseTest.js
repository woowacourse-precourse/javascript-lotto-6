import Purchase from '../src/model/Purchase.js'; 
describe('Purchase', () => {
  // 로또숫자배열 메소드 테스트
  describe('makeLottoArray', () => {
    it('로또 배열을 생성해야 함', () => {
      const lottoArray = Purchase.makeLottoArray(5000);
      expect(lottoArray).toHaveLength(5);

      for (const lottoTicket of lottoArray) {
          //로또 형식처럼 6개의 배열인지
        expect(lottoTicket).toHaveLength(6);
        for (const number of lottoTicket) {
          //숫자들이 1~45의 로또형식의 숫자인지
            expect(number).toBeGreaterThanOrEqual(1);
            expect(number).toBeLessThanOrEqual(45);
          }
          //중복된 숫자가 없는지
        expect(new Set(lottoTicket).size).toBe(6);
      }
    });
  });

});
