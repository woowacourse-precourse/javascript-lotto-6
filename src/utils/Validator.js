import { Console } from '@woowacourse/mission-utils';
import CONSTANT from '../constants/constant.js';

const lottoValidators = {
  validateDuplicate(winningNum) {
    const isDuplicated = new Set(winningNum).size !== winningNum.length;

    if (isDuplicated) {
      throw new Error(CONSTANT.error.duplicate);
    }
  },
  validateWinningNumLength(winningNum) {
    if (winningNum.length !== 6) {
      throw new Error(CONSTANT.error.invalidWinningNumLength);
    }
  },
  validateWinningNumRange(winningNum) {
    winningNum.map((item, idx) => {
      if (item < 1 || item > 45) {
        throw new Error(
          '[ERROR] 로또 번호는 1보다 작거나 45보다 크면 안됩니다.'
        );
      }
    });
  },
  validateWinningNumType(winningNum) {
    const checkStyle = /\D/;
    winningNum.map((item, idx) => {
      if (checkStyle.test(item)) {
        throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
      }
    });
  },
};

const lottoResultValidators = {
  validateBonusNumDuplicate(bonusNum, winningNum) {
    winningNum.map((item, idx) => {
      if (item === parseInt(bonusNum, 10)) {
        throw new Error('[ERROR] 당첨 번호 중 중복된 번호가 있습니다.');
      }
    });
  },
  validateBonusNumRange(bonusNum) {
    console.log(parseInt(bonusNum, 10), typeof parseInt(bonusNum, 10));
    if (parseInt(bonusNum, 10) < 1) {
      throw new Error('[ERROR] 로또 번호는 1보다 작으면 안됩니다.');
    }
    if (parseInt(bonusNum, 10) > 45) {
      throw new Error('[ERROR] 로또 번호는 45보다 크면 안됩니다.');
    }
  },
  validateBonusNumType(bonusNum) {
    const checkStyle = /\D/;
    if (checkStyle.test(bonusNum)) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }
  },
  validateBonusNumLength(bonusNum) {
    const bonusNumList = bonusNum.split(',');

    if (bonusNumList.length !== 1) {
      throw new Error('[ERROR] 보너스 번호는 한 숫자만 올 수 있습니다.');
    }
    return bonusNum;
  },
};

const makeLottoValidators = {
  validateAmountType(amount) {
    const checkStyle = /\D/;
    if (checkStyle.test(amount)) {
      return Console.print(CONSTANT.error.invalidAmountType);
    }
  },
  validateAmountUnit(amount) {
    const checkStyle = /\D/;
    if (!checkStyle.test(amount) && amount % CONSTANT.game.unit !== 0) {
      return Console.print(CONSTANT.error.invalidAmountUnit);
    }
  },
};

const VALIDATOR = {
  lottoResultValidators,
  lottoValidators,
  makeLottoValidators,
};
export default VALIDATOR;
