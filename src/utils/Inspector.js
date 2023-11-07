class Inspector {
  // 구입금액
  containNumberOnly (number) {
    const regExpNumber = /^\d+$/g;
    if (number.match(regExpNumber)) {
      return true;
    } else {
      return false;
    };
  }

  getIsThousand (number) {
    return number % 1000 === 0;
  }

  // 당첨번호
  getSplited (string) {
    const splitedString = string.split(',').map((_, i, arr) => {
      return arr[i] = arr[i].trim();
    });
    return splitedString.length === 6 ? splitedString : false;
  }

  getIsAble (splited) {
    return splited.map((_, i, arr) => {
      if (arr[i] === '') {
        throw new Error('[ERROR] 로또 번호는 1,2,3,4,5,6 와 같은 구조로 이루어져야 합니다.');
      };
      const isNumber = this.containNumberOnly(arr[i]);
      if (!isNumber) {
        throw new Error('[ERROR] 쉼표 사이는 숫자만 들어가야 합니다.')
      };
      const numberEl = Number(arr[i]);
      if(numberEl < 1 && numberEl > 45) {
        throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.')
      };
      return arr[i];
    });
  }
}

export default Inspector;