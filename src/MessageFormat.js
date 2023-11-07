const MessageFormat = {
  lottoCount: count => {
    return `\n${count}개를 구매했습니다.`;
  },
  rateOfReturn: ratio => {
    return `총 수익률은 ${ratio}%입니다.`;
  },
};

export default MessageFormat;
