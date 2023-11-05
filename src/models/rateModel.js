const rateModel = {
  getTotal(revenues) {
    const total = revenues.reduce((acc, cur) => acc + cur, 0);

    return total;
  },

  getRate(total, price) {
    const percent = (total / price) * 100;
    const rate = Number(percent.toFixed(2));

    return rate.toLocaleString('en-US');
  },
};

export default rateModel;
