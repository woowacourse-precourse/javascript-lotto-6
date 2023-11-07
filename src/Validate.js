class Validate {
  priceValidate(price) {
    if (price % 1000 !== 0) throw "[ERROR] 구입금액이 1000원 단위가 아닙니다.";
  }
}

export default Validate;
