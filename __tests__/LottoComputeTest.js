import * as LottoCompute from '../src/model/LottoCompute';
import Lotto from "../src/Lotto.js";

  describe('lottoCompute', () => {
   
    it('lottoCompute  5등 1개', () => {
      const winning = new Lotto([1, 2, 3, 4, 5, 6]); 
      const lottoArray = [
        [1, 2, 34, 35, 36, 37],
        [3, 5, 7, 9, 10, 35],
        [5, 6, 16, 35, 36, 4],
        [1, 8, 11, 31, 34, 41],
      ];
      const bonus = 34;
      const matchDict = {
        3 : [0, 5000, "3개 일치 (5,000원) - "], // 5등
        4 : [0, 50000, "4개 일치 (50,000원) - "], // 4등
        5 : [0, 1500000, "5개 일치 (1,500,000원) - "], // 3등
        bonus : [0, 30000000, "5개 일치, 보너스 볼 일치 (30,000,000원) - "],
        6 : [0, 2000000000, "6개 일치 (2,000,000,000원) - "], // 1등
      } 
  
      LottoCompute.lottoCompute(winning, lottoArray, bonus, 4, matchDict);
  
      // Assert that matchDict['bonus'][0] has been incremented
      expect(matchDict[3][0]).toBe(1);
    });

    it('lottoCompute  1등, 보너스 , 3등, 5등' , () => {
        const winning = new Lotto([1, 2, 3, 4, 5, 6]); 
        const lottoArray = [
          [1, 2, 3, 4, 5, 6],
          [2, 3, 4, 5, 6, 10],
          [2, 3, 4, 5, 6, 34],
          [1, 8, 11, 31, 34, 41],
        ];
        const bonus = 34;
        const matchDict = {
          3 : [0, 5000, "3개 일치 (5,000원) - "], // 5등
          4 : [0, 50000, "4개 일치 (50,000원) - "], // 4등
          5 : [0, 1500000, "5개 일치 (1,500,000원) - "], // 3등
          bonus : [0, 30000000, "5개 일치, 보너스 볼 일치 (30,000,000원) - "],
          6 : [0, 2000000000, "6개 일치 (2,000,000,000원) - "], // 1등
        } 
    
        LottoCompute.lottoCompute(winning, lottoArray, bonus, 4, matchDict);
    
        expect(matchDict['bonus'][0]).toBe(1);
        expect(matchDict[6][0]).toBe(1);
        expect(matchDict[5][0]).toBe(1);
      });
});

describe('수익률 계산', () => {
    it('calculates the correct profit rate', () => {
      const matchDict = {
        3: [0, 5000, "3개 일치 (5,000원) - "],
        4: [0, 50000, "4개 일치 (50,000원) - "],
        5: [0, 1500000, "5개 일치 (1,500,000원) - "],
        bonus: [1, 30000000, "5개 일치, 보너스 볼 일치 (30,000,000원) -"],
        6: [1, 2000000000, "6개 일치 (2,000,000,000원) -"],
      };
      const count = 4; // Adjust the count based on your test scenario
  
      const profit = LottoCompute.profitCompute(matchDict, count);
  
      const sum = matchDict[3][0] * matchDict[3][1] +
        matchDict[4][0] * matchDict[4][1] +
        matchDict[5][0] * matchDict[5][1] +
        matchDict.bonus[0] * matchDict.bonus[1] +
        matchDict[6][0] * matchDict[6][1];
      

      const expectedProfit = (sum / (count * 1000)) * 100;
  
      expect(profit).toBe(expectedProfit);
    });
  });