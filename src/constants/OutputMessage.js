const OutputMessage = {
    PURCHASED_LOTTO_COUNT: count => `\n${count}개를 구매했습니다.`,
    RESULT_HEADER: '\n당첨 통계\n---',
    RESULT: (key, prize, count) =>
      `${key === '5+1' ? '5' : key}개 일치${
        key === '5+1' ? ', 보너스 볼 일치' : ''
      } (${prize.toLocaleString()}원) - ${count}개`,
    PROFIT: profit => `총 수익률은 ${profit}%입니다.`,
  };
  
  export default OutputMessage;