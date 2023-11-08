class Inspector {
  // 구입금액
  containNumberOnly (number) {
    const regExpNumber = /^\d+$/g;
    if (number.match(regExpNumber)) {
      return true;
    } else {
      throw new Error("[ERROR] 구입금액은 숫자로만 이루어져야 합니다.") ;
    };
  }

  getIsThousand (number) {
    if (number % 1000 === 0) {
      return true;
    } else {
      throw new Error("[ERROR] 구입금액은 숫자로만 이루어져야 합니다.") ;
    }
  }

  // 당첨번호
  getSplited (string) {
    const splitedString = string.split(',').map((_, i, arr) => {
      return arr[i] = arr[i].trim();
    });
    return splitedString.length === 6 ? splitedString : false;
  }

  getIsValid (string) {
    if (string === '') {
      throw new Error("[ERROR] 로또 번호는 1,2,3,4,5,6 와 같은 구조로 이루어져야 합니다.");
    };
  }

  getIsInRange (number) {
    if(number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    };
  }

  getIsAble (splited) {
    return splited.map((stringNumber) => {
      this.getIsValid(stringNumber);
      this.containNumberOnly(stringNumber);
      this.getIsInRange(Number(stringNumber));
      return stringNumber;
    });
  }

  // 보너스번호
  getIsDuplicate (winnerLotto, bonus) {
    this.getIsInRange(bonus);
    if (winnerLotto.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중독되지 않아야 합니다.');
    } else if (!winnerLotto.includes(bonus)) {
      return true;
    }
  }
}

export default Inspector;