// Result.test.js
import Result from '../src/Result.js';

describe('Result', () => {
  describe('calculateResults', () => {
    it('should calculate results based on lotto tickets and winning numbers', () => {
      const lottoTickets = [
        { getNumbers: () => [1, 2, 3, 4, 5, 6] },
        { getNumbers: () => [7, 8, 9, 10, 11, 12] },
      ];
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const results = Result.calculateResults(lottoTickets, winningNumbers, bonusNumber);

      expect(results).toEqual({
        0: 1,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        5.1: 0,
        6: 1,
      });
    });
  });

  describe('calculateMatchingCount', () => {
    it('should calculate matching count for a single lotto ticket', () => {
      const ticket = { getNumbers: () => [1, 2, 3, 4, 5, 6] };
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const matchingCount = Result.calculateMatchingCount(ticket, winningNumbers, bonusNumber);

      expect(matchingCount).toBe(6); 
    });
  });

  describe('calculateTotalPrize', () => {
    it('should calculate the total prize based on results', () => {
      const results = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        5.1: 7,
        6: 8,
      };

      const totalPrize = Result.calculateTotalPrize(results);

      expect(totalPrize).toBe(505000); // Calculate the total prize based on your specific test case
    });
  });

  describe('calculateTotalPurchaseAmount', () => {
    it('should calculate the total purchase amount based on results', () => {
      const results = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        5.1: 7,
        6: 8,
      };

      const totalPurchaseAmount = Result.calculateTotalPurchaseAmount(results);

      expect(totalPurchaseAmount).toBe(36000); // Calculate the total purchase amount based on your specific test case
    });
  });

  // You can add more test cases for other methods
});
