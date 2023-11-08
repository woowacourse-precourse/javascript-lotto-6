export const judgeLotto = (lottoTicket, answerLotto, bonusLotto) => { 
  let lottoJudgingResult = 0;
  let bonusJudgingResult = 0;

  if (lottoTicket.includes(bonusLotto)) {
    bonusJudgingResult++;
   } 
  for (let i = 0; i < lottoTicket.length; i++) {
    if (lottoTicket.includes(answerLotto[i])) lottoJudgingResult++;
  }

  return { lottoJudgingResult, bonusJudgingResult };
}

export const judgeResult = (lottoJudgingResult, bonusJudgingResult, result) =>{
  if (lottoJudgingResult === 3) result['3개 일치'] += 1;
  if (lottoJudgingResult === 4) result['4개 일치'] += 1;
  if (lottoJudgingResult === 5 && bonusJudgingResult === 0) result['5개 일치'] += 1;
  if (lottoJudgingResult === 5 && bonusJudgingResult === 1) result['5개 일치, 보너스 볼 일치'] += 1;
  if (lottoJudgingResult === 6) result['6개 일치'] += 1;
}

const MATCH_NUMBER = {
    '3개 일치': 5000,
    '4개 일치': 50000,
    '5개 일치': 1500000,
    '5개 일치, 보너스 볼 일치': 30000000,
    '6개 일치': 2000000000,
  };

export const getTotalProfit = (result) => {
    const keys = Object.keys(result);
    let totalProfit = 0;
    keys.forEach((key) => {
      totalProfit += MATCH_NUMBER[key] * result[key];
    });
    return totalProfit;
  }