class Validate {
  priceValidate(price) {
    if (price % 1000 !== 0) throw "[ERROR] 구입금액이 1000원 단위가 아닙니다.";
  }

  prizeValidate(prize) {
    const stringList = prize.split(",");
    const prizeNumber = stringList.map((data) => Number(data));

    if (prizeNumber.map((prize) => isNaN(prize)).includes(true))
      throw "[ERROR] 숫자가 아닌 값이 포함 되어있습니다.";
    else if (stringList.length !== 6)
      throw "[ERROR] 당첨 번호 숫자는 6개여야 합니다.";
    else if (prizeNumber.map((prize) => prize < 1 || prize > 45).includes(true))
      throw "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
  }

  bonusValidate(bonus) {
    if (isNaN(Number(bonus))) throw "[ERROR] 보너스 번호가 숫자가 아닙니다.";
    else if (Number(bonus) < 1 || Number(bonus) > 46)
      throw "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
  }
}

export default Validate;
