export class LottoChecker {
    constructor(lottoNum) {
        this.lottoNum = lottoNum;
    }

    checkWinning(winNumbers) {
        let winResult = Array.from({length: 8}, () => 0);
    
        this.lottoNum.forEach(lotto => {
          const matchCount = this.match(lotto, winNumbers.normal);
          if (matchCount < 3) return;
    
          if (matchCount === 5 && lotto.includes(winNumbers.bonus)) {
            winResult[6]++;
          } else {
            winResult[matchCount]++;
          }
        });
    
        return winResult;
    }    

    match(lottoNumbers, winNumbers) {
        let matchCount = 0;
        lottoNumbers.forEach(number => {
          if (winNumbers.includes(number)) matchCount++;
        });
        return matchCount;
    }
}
