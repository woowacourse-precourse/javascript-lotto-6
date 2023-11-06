import LottoTickets from '../src/LottoTicket.js';
import Lotto from "../src/Lotto.js";

describe('LottoTickets', () => {
  describe('getLottoTickets', () => {
    it('should generate lotto tickets based on purchase amount', () => {
      const purchaseAmount = 5000; 
      const lottoTickets = LottoTickets.getLottoTickets(purchaseAmount);
      
      expect(lottoTickets).toHaveLength(5);
      
      lottoTickets.forEach((ticket) => {
        expect(ticket).toBeInstanceOf(Lotto);
      });
    });
  });
  
  describe('generateLottoTickets', () => {
    it('should generate the specified number of lotto tickets', () => {
      const count = 3;
      const lottoTickets = LottoTickets.generateLottoTickets(count);
      
      expect(lottoTickets).toHaveLength(count);
      
      lottoTickets.forEach((ticket) => {
        expect(ticket).toBeInstanceOf(Lotto);
      });
    });
  });
});
