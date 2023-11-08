import { LOTTO_CONSTANTS } from './LottoContstants';

const ERROR_MESSAGE = Object.freeze({
	errorPrefix: '[ERROR]',
	inValidNumber: '[ERROR] 유효하지 않은 숫자입니다.',
	inCludeInValidNumber: '[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.',
	inValidLottoCost: `[ERROR] ${LOTTO_CONSTANTS.standartLottoCost}원 단위로 입력해주세요.`,
	inValidLottoLength: `[ERROR] 로또 번호는 ${LOTTO_CONSTANTS.lottoNumberCount}개여야 합니다.`,
	duplicatedNumber: '[ERROR] 중복된 번호가 존재합니다.',
	outOfNumberScale: `[ERROR] ${LOTTO_CONSTANTS.minLottoNumber}과 ${LOTTO_CONSTANTS.maxLottoNumber} 사이 숫자만 입력 가능합니다.`,
});

const SYSTEM_MESSAGE = Object.freeze({
	askPurchaseCost: '구입 금액을 입력해주세요.\n',
	askWinnerLottoNumber: '\n당첨 번호를 입력해 주세요.\n',
	askBonusLottoNumber: '\n보너스 번호를 입력해 주세요.\n',
	numberOfTicket: (ticketCount) => `${ticketCount}개를 구매했습니다.`,
	lottoResultTitle: '\n당첨통계\n---\n',
	lottoRankResultMessage: (rankCorrect, rankReward, lottoCorrectCount) => {
		return `${rankCorrect}개 일치 (${rankReward}원) - ${lottoCorrectCount}개`;
	},
	lottoRankResultMessageWithBonus: (rankCorrect, rankReward, lottoCorrectCount) => {
		return `${rankCorrect}개 일치, 보너스 불 일치 (${rankReward}원) - ${lottoCorrectCount}개`;
	},
	lottoEarnRateMessage: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export { ERROR_MESSAGE, SYSTEM_MESSAGE };
