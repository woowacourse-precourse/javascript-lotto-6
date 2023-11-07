const numberCheck = {
  unit: (number, unit, errorMessage) => {
    if (number % unit !== 0) {
      throw new Error(errorMessage);
    }
  },
  number: (number, errorMessage) => {
    const regNumber = /^\d*$/;
    if (!regNumber.test(number)) {
      throw new Error(errorMessage);
    }
  },
  rangeCheck: (number, startNumber, endNumber, errorMessage) => {
    if (number < startNumber || number > endNumber) {
      throw new Error(errorMessage);
    }
  },
};

const numbersCheck = {
  length: (numbers, errorMessage) => {
    if (numbers.length !== 6) {
      throw new Error(errorMessage);
    }
  },
  duplicate: (numbers, number, errorMessage) => {
    const count = numbers.filter((value) => value === number).length;
    if (count > 1) {
      throw new Error(errorMessage);
    }
  },
};

export { numberCheck, numbersCheck };
