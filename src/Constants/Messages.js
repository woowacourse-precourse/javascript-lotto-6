import { RANK_WINNING_NUMBER } from './LottoGame.js';

const MESSAGES = {
  buyLottoPrice: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  buyLottoQuantity: (quantity) => `\n${quantity}개를 구매했습니다.`,
  lottoString: (lotto) => `[${lotto}]`,
  winning: '\n당첨 통계',
  resultBarLine: '---',
  winningResult: (rankMap) => `3개 일치 (5,000원) - ${rankMap[RANK_WINNING_NUMBER.five]}개
4개 일치 (50,000원) - ${rankMap[RANK_WINNING_NUMBER.four]}개
5개 일치 (1,500,000원) - ${rankMap[RANK_WINNING_NUMBER.three]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankMap[RANK_WINNING_NUMBER.two]}개
6개 일치 (2,000,000,000원) - ${rankMap[RANK_WINNING_NUMBER.one]}개`,
  earningsPercent: (earningsPercent) => `총 수익률은 ${earningsPercent}%입니다.`,

};

export default MESSAGES;
