const MARK = {
  startMark: '[',
  endMark: ']',
  delimiter: ', ',
};

// TODO: 분리
const LOTTO_MESSAGE = Object.freeze({
  ...MARK,
  requestMoney: '구입금액을 입력해 주세요.\n',
  lottoCount: (count) => `${count}개를 구매했습니다.\n`,
  requestWinningLotto: '당첨 번호를 입력해주세요.\n',
  lottoNumberDelimiter: ',', // TODO: 그냥 구분자와 혼동되므로 수정 필요
  requestBonusNumber: '보너스 번호를 입력해주세요.\n',
  resultHeader: '당첨 통계',
  resultHeaderLine: '***',
  matchNotification: (matchCountBasis, isBonus) =>
    `${matchCountBasis}개 일치${LOTTO_MESSAGE.bonus(isBonus)} `,
  bonus: (isBonus) => (isBonus ? ', 보너스 볼 일치' : ''),
  matchCount: (matchCount) => ` - ${matchCount}개 일치`,
  prize: (prize) => `(${prize}원)`,
  yield: (yieldPercent) => `총 수익률은 ${yieldPercent}%입니다.\n`,
  singleLotto: (lotto) =>
    `${MARK.startMark}${lotto.join(MARK.delimiter)}${MARK.endMark}`,
  nextLine: '\n',
});

export default LOTTO_MESSAGE;
