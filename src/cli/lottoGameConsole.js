import { Console } from '@woowacourse/mission-utils';

// TODO: 추후에 하나로 묶기
import { validatePurchasedLottoAmount } from '../validations/purchasedLottoAmountValidation.js';
import { validateLottoNumber } from '../validations/lottoNumberValidation.js';

import { SYMBOLS } from '../constants/symbols.js';

import systemConsole from './systemConsole.js';
import { validateBonusNumber } from '../validations/bonusNumberValidation.js';

const lottoGameConsole = Object.freeze({
  input: Object.freeze({
    messages: Object.freeze({
      purchasedLottoAmount: '구입금액을 입력해 주세요.\n',
      winningLottoNumber: '당첨 번호를 입력해 주세요.\n',
      bonusNumber: '보너스 번호를 입력해 주세요.\n',
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
      purchasedLottoNumbers(lottoCount) {
        return `\n${lottoCount}개를 구매했습니다.`;
      },

      lottoNumbers(lottoNumbers) {
        return lottoNumbers
          .map((lottoNumber) => `[${lottoNumber.join(`${SYMBOLS.comma} `)}]`)
          .join('\n');
      },
    }),

    printLottoNumbers(lottoNumbers) {
      Console.print(this.messages.purchasedLottoNumbers(lottoNumbers.length));
      Console.print(this.messages.lottoNumbers(lottoNumbers));
    },
  }),
});

export default lottoGameConsole;
