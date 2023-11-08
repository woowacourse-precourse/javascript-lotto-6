import { Console } from '@woowacourse/mission-utils';

import { SYMBOLS } from '../../constants/symbols.js';

import { winningInfoGeneration } from '../../domain/index.js';

import {
  purchasedLottoAmountValidation,
  lottoNumberValidation,
  bonusNumberValidation,
} from '../../validations/index.js';

import systemConsole from '../systemConsole.module.js';

/**
 * @module
 * '로또 게임 내 입/출력'의 책임을 가지고 있는 모듈
 */
const lottoGameConsole = Object.freeze({
  input: Object.freeze({
    messages: Object.freeze({
      purchasedLottoAmount: '구입금액을 입력해 주세요.\n',
      winningLottoNumber: '\n당첨 번호를 입력해 주세요.\n',
      bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
    }),

    /**
     * @returns {Promise<number>} 구매 로또 금액
     */
    async readPurchasedLottoAmount() {
      const purchasedLottoAmount = Number(
        await systemConsole.read(this.messages.purchasedLottoAmount),
      );
      purchasedLottoAmountValidation.check(purchasedLottoAmount);
      return purchasedLottoAmount;
    },

    /**
     * @returns {Promise<number[]>} 당첨 번호
     */
    async readWinningLottoNumber() {
      const winningLottoNumber = (await systemConsole.read(this.messages.winningLottoNumber))
        .split(SYMBOLS.comma)
        .map(Number);
      lottoNumberValidation.check(winningLottoNumber);
      return winningLottoNumber;
    },

    /**
     * @param {number[]} winningLottoNumber - 당첨 번호
     * @returns {Promise<number>} 보너스 번호
     */
    async readBonusNumber(winningLottoNumber) {
      const bonusNumber = Number(await systemConsole.read(this.messages.bonusNumber));
      bonusNumberValidation.check({ winningLottoNumber, bonusNumber });
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

      /**
       * @param {number} lottoCount = 구매한 로또 갯수
       * @returns {string} 포맷팅 된 메시지
       */
      purchasedLottoNumbers(lottoCount) {
        return `\n${lottoCount}개를 구매했습니다.`;
      },

      /**
       * @param {number[][]} lottoNumbers = 구매한 로또 번호들
       * @returns {string} 포맷팅 된 메시지
       */
      lottoNumbers(lottoNumbers) {
        const formatWithComma = (lottoNumber) => lottoNumber.join(`${SYMBOLS.comma} `);
        const wrapWithBrackets = (text) => `[${text}]`;
        const formatLottoNumber = (lottoNumber) => wrapWithBrackets(formatWithComma(lottoNumber));

        return lottoNumbers.map(formatLottoNumber).join('\n');
      },

      /**
       * @param {import('../../utils/jsDoc.js').RankDistributionTable} rankDistributionTable - 각 등수 별 분포 수가 담긴 객체 반환 (모든 프로퍼티가 존재하는 것은 아님)
       * @returns {string} 포맷팅 된 메시지
       */
      rankDistributionTable(rankDistributionTable) {
        const ranks = Object.keys(this.prizeDescription).reverse();

        const formatPrizeDescription = (rank) => {
          const { rankInfo } = winningInfoGeneration.constants;
          const description = this.prizeDescription[rank];
          const prizeAmount = rankInfo[rank].prizeAmount.toLocaleString();
          const count = (rankDistributionTable && rankDistributionTable[rank]) ?? 0;

          return `${description} (${prizeAmount}원) - ${count}개`;
        };

        return ranks.map(formatPrizeDescription).join('\n');
      },

      /**
       * @param {string} rateOfReturn - 수익률(문자열)
       * @returns {string} 포맷팅 된 메시지
       */
      rateOfReturn(rateOfReturn) {
        return `총 수익률은 ${rateOfReturn}%입니다.`;
      },
    }),

    /**
     * @param {number[][]} lottoNumbers - 구매한 로또 번호들
     */
    printLottoNumbers(lottoNumbers) {
      Console.print(this.messages.purchasedLottoNumbers(lottoNumbers.length));
      Console.print(this.messages.lottoNumbers(lottoNumbers));
    },

    /**
     * @param {{ rankDistributionTable : import('../../utils/jsDoc.js').RankDistributionTable, rateOfReturn : string }} params - 각 등수 별 분포 수 테이블과 수익률이 담긴 객체
     */
    printWinningResult({ rankDistributionTable, rateOfReturn }) {
      Console.print(this.messages.title);
      Console.print(this.messages.rankDistributionTable(rankDistributionTable));
      Console.print(this.messages.rateOfReturn(rateOfReturn));
    },
  }),
});

export default lottoGameConsole;
