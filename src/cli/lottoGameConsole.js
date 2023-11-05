import { Console } from '@woowacourse/mission-utils';

// TODO: 추후에 하나로 묶기
import { validatePurchasedLottoAmount } from '../validations/purchasedLottoAmountValidation.js';
import { validateLottoNumber } from '../validations/lottoNumberValidation.js';
import { validateBonusNumber } from '../validations/bonusNumberValidation.js';

import { SYMBOLS } from '../constants/symbols.js';

import winningInfo from '../domain/confirmWinningInfo/winningInfo.js';

import systemConsole from './systemConsole.js';

const lottoGameConsole = Object.freeze({
  input: Object.freeze({
    messages: Object.freeze({
      purchasedLottoAmount: '구입금액을 입력해 주세요.\n',
      winningLottoNumber: '\n당첨 번호를 입력해 주세요.\n',
      bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
    }),

    async readPurchasedLottoAmount() {
      const purchasedLottoAmount = await systemConsole.read(this.messages.purchasedLottoAmount);
      validatePurchasedLottoAmount(Number(purchasedLottoAmount));
      return purchasedLottoAmount;
    },

    async readWinningLottoNumber() {
      const winningLottoNumber = (await systemConsole.read(this.messages.winningLottoNumber))
        .split(SYMBOLS.comma)
        .map(Number);
      validateLottoNumber(winningLottoNumber);
      return winningLottoNumber;
    },

    async readBonusNumber(winningLottoNumber) {
      const bonusNumber = Number(await systemConsole.read(this.messages.bonusNumber));
      validateBonusNumber({ winningLottoNumber, bonusNumber });
      return bonusNumber;
    },
  }),

  output: Object.freeze({
    messages: Object.freeze({
      title: '\n당첨 통계\n---',
      prizeDescription: {
        '1st': '6개 일치',
        '2nd': '5개 일치, 보너스 볼 일치',
        '3rd': '5개 일치',
        '4th': '4개 일치',
        '5th': '3개 일치',
      },

      purchasedLottoNumbers(lottoCount) {
        return `\n${lottoCount}개를 구매했습니다.`;
      },

      lottoNumbers(lottoNumbers) {
        const formatWithComma = (lottoNumber) => lottoNumber.join(', ');
        const wrapWithBrackets = (text) => `[${text}]`;
        const formatLottoNumber = (lottoNumber) => wrapWithBrackets(formatWithComma(lottoNumber));

        return lottoNumbers.map(formatLottoNumber).join('\n');
      },

      rankDistributionTable(rankDistributionTable) {
        const ranks = Object.keys(this.prizeDescription).reverse();

        const formatPrizeDescription = (rank) => {
          const { rankInfo } = winningInfo.constants;
          const description = this.prizeDescription[rank];
          const prizeAmount = rankInfo[rank].prizeAmount.toLocaleString();
          const count = rankDistributionTable[rank] ?? 0;

          return `${description} (${prizeAmount}원) - ${count}개`;
        };

        return ranks.map(formatPrizeDescription).join('\n');
      },

      rateOfReturn(rateOfReturn) {
        return `총 수익률은 ${rateOfReturn}%입니다.`;
      },
    }),

    printLottoNumbers(lottoNumbers) {
      Console.print(this.messages.purchasedLottoNumbers(lottoNumbers.length));
      Console.print(this.messages.lottoNumbers(lottoNumbers));
    },

    printWinningResult({ rankDistributionTable, rateOfReturn }) {
      Console.print(this.messages.title);
      Console.print(this.messages.rankDistributionTable(rankDistributionTable));
      Console.print(this.messages.rateOfReturn(rateOfReturn));
    },
  }),
});

export default lottoGameConsole;
