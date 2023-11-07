const rateModel = {
  getTotal(revenues) {
    const total = revenues.reduce((acc, cur) => acc + cur, 0);

    return total;
  },

  getRate(total, price) {
    const percent = (total / price) * 100;
    const rate = percent.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return rate;
  },
};

export default rateModel;
