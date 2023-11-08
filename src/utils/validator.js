import { ERROR_MESSAGE, VALIDATION_RULE, REGEX } from './constant';

export const Validator = {
  Money_Divisible: (amount) => {
    const parseAmount = parseInt(amount);
    if (parseAmount % VALIDATION_RULE.MONEY_FACTOR != 0) {
      throw ERROR_MESSAGE.NOT_1000_MULTIPLES;
    }
  },

  Is_Number: (number) => {
    if (number.match(REGEX.NUMBER_REGEX)) {
      throw ERROR_MESSAGE.IS_NOT_NUMBER;
    }
  },

  Is_Duplicate: (winninglotto) => {
    const checkForDplct = new Set();
    winninglotto.forEach((lottonumber) => {
      if (checkForDplct.has(lottonumber)) {
        throw ERROR_MESSAGE.NOT_ALLOW_DUPLICATE;
      }
      checkForDplct.add(lottonumber);
    });
  },

  Is_Duplicate_Bonus: (winninglotto, bonus) => {
    if (winninglotto.includes(bonus)) {
      throw ERROR_MESSAGE.NO_DUPLICATE_BONUS;
    }
  },

  Has_sixLength: (winninglotto) => {
    if (winninglotto.length != VALIDATION_RULE.LOTTO_LENGTH) {
      throw ERROR_MESSAGE.INVALID_COUNT;
    }
  },

  Non_Exist: (value) => {
    if (value === undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_VALUE);
    }
  },

  Check_NumRange_SpeChar: (stringvalue) => {
    Check_NumRange(stringvalue);
    Check_Speacial_char(stringvalue);
  },

  Check_Bonus: (bonusvalue) => {
    Onlyone_Bonus(bonusvalue);
    Check_NumRange(bonusvalue);
  },
};

const Check_NumRange = (value) => {
  if (value.match(!REGEX.CHECK_NUMBERRANGE)) {
    throw ERROR_MESSAGE.INVALID_RANGE;
  }
};

const Check_Speacial_char = (value) => {
  if (!value.match(REGEX.CHECK_COMMA)) {
    throw ERROR_MESSAGE.INVALID_CHAR;
  }
};

const Onlyone_Bonus = (bonusvalue) => {
  if (bonusvalue.length != 1) {
    throw ERROR_MESSAGE.INVALID_BONUS_LENGTH;
  }
};
