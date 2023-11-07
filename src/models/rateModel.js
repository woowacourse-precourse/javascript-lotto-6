const rateModel = {
  getTotal(revenues) {
    const total = revenues.reduce((acc, cur) => acc + cur, 0);

    return total;
  },

  getPercent(total, price) {
    const percent = (total / price) * 100;
    return percent;
  },

  getRoundedValue(percent) {
    const roundedValue = percent.toFixed(1);
    return roundedValue;
  },

  getMonetaryValue(roundedValue) {
    const monetaryValue = roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return monetaryValue;
  },

  getRate(total, price) {
    const percent = this.getPercent(total, price);
    const roundedValue = this.getRoundedValue(percent);
    const monetaryValue = this.getMonetaryValue(roundedValue);

    return monetaryValue;
  },
};

export default rateModel;
