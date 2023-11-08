import SETTINGS from './Settings.js';

const MESSAGES = Object.freeze({
  inputBalance: '\n구입금액을 입력해 주세요.\n',
  inputWinningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',

  outputLottoAmount: '개를 구매했습니다.',
  outputResultTitle: '\n당첨 통계\n---',

  outputFifthPrize: `3개 일치 (${SETTINGS.fifthPrize.toLocaleString('ko-KR')}원) - `,
  outputFourthPrize: `4개 일치 (${SETTINGS.fourthPrize.toLocaleString('ko-KR')}원) - `,
  outputThirdPrize: `5개 일치 (${SETTINGS.thirdPrize.toLocaleString('ko-KR')}원) - `,
  outputSecondPrize: `5개 일치, 보너스 볼 일치 (${SETTINGS.secondPrize.toLocaleString('ko-KR')}원) - `,
  outputFirstPrize: `6개 일치 (${SETTINGS.firstPrize.toLocaleString('ko-KR')}원) - `,
  outputReturnRate: `총 수익률은 `,

  suffixAmount: '개',
  suffixReturnRate: '%입니다.',
});

export default MESSAGES;
