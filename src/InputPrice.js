class InputPrice {
  constructor(price) {
    this.validate(price);
    this.price = price;
  }
  validate(price) {
    if (price % 1000 !== 0) {
      throw new Error("[ERROR]");
    }
    else if (isNaN(parseInt(price))) {
      throw new Error("[ERROR]");
    }
    else if (price <= 0) {
      throw new Error("[ERROR]");
    }
  }
  calculateLottoCount(price) {
    return price / 1000;
  }
}

export default InputPrice