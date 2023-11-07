class Machine {
  CalculatorOfLottoAmount(money) {
    return Math.floor(money / 1000);
  }

  compareNumbers(userNumbers, bonusNumber) {
    const matchingNumbers = userNumbers.filter((num) => this.numbers.includes(num));
    const isBonusNumberMatch = userNumbers.includes(bonusNumber);
    const matchingCount = matchingNumbers.length;

    switch (matchingCount) {
      case 6:
        return '1등: 6개 번호 일치 / 2,000,000,000원';
      case 5:
        if (isBonusNumberMatch) {
          return '2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원';
        }
        return '3등: 5개 번호 일치 / 1,500,000원';
      case 4:
        return '4등: 4개 번호 일치 / 50,000원';
      case 3:
        return '5등: 3개 번호 일치 / 5,000원';
      default:
        return '낙첨: 일치하는 번호 없음';
    }
  }

  // matchingCount(matchingCount, isBonusNumberMatch) {
  //   switch (matchingCount) {
  //     case 6:
  //       return '1등: 6개 번호 일치 / 2,000,000,000원';
  //     case 5:
  //       if (isBonusNumberMatch) {
  //         return '2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원';
  //       }
  //       return '3등: 5개 번호 일치 / 1,500,000원';

  //     case 4:
  //       return '4등: 4개 번호 일치 / 50,000원';
  //     case 3:
  //       return '5등: 3개 번호 일치 / 5,000원';
  //     default:
  //       return '낙첨: 일치하는 번호 없음';
  //   }
  // }

  // compareNumbers(userNumbers, bonusNumber) {
  //   const matchingNumbers = this.numbers.filter((num) => userNumbers.includes(num));
  //   const isBonusNumberMatch = userNumbers.includes(bonusNumber);
  //   const matchingCount = matchingNumbers.length;

  //   return matchingCount(matchingCount, isBonusNumberMatch);
  // }
}

export default Machine;
