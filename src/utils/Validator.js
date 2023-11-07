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
      throw new Error(CONSTANT.error.invalidumLength);
    }
  },
  validateWinningNumRange(winningNum) {
    winningNum.map((item, idx) => {
      if (item < 1 || item > 45) {
        throw new Error(CONSTANT.error.invalidNumRange);
      }
    });
  },
  validateWinningNumType(winningNum) {
    const checkStyle = /\D/;
    winningNum.map((item, idx) => {
      if (checkStyle.test(item)) {
        throw new Error(CONSTANT.error.invalidNumType);
      }
    });
  },
};

const lottoResultValidators = {
  validateBonusNumDuplicate(bonusNum, winningNum) {
    winningNum.map((item, idx) => {
      if (item === parseInt(bonusNum, 10)) {
        throw new Error(CONSTANT.error.invalidBonusNumDuplicate);
      }
    });
  },
  validateBonusNumRange(bonusNum) {
    console.log(parseInt(bonusNum, 10), typeof parseInt(bonusNum, 10));
    if (parseInt(bonusNum, 10) < 1) {
      throw new Error(CONSTANT.error.invalidNumRange);
    }
    if (parseInt(bonusNum, 10) > 45) {
      throw new Error(CONSTANT.error.invalidNumRange);
    }
  },
  validateBonusNumType(bonusNum) {
    const checkStyle = /\D/;
    if (checkStyle.test(bonusNum)) {
      throw new Error(CONSTANT.error.invalidNumType);
    }
  },
  validateBonusNumLength(bonusNum) {
    const bonusNumList = bonusNum.split(',');

    if (bonusNumList.length !== 1) {
      throw new Error(CONSTANT.error.invalidBonusNumLength);
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
