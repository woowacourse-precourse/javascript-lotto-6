const formation = {
  format(message, ...args) {
    return args.reduce(
      (formatted, arg, index) => formatted.replace(`{${index}}`, arg),
      message,
    );
  },

  /**
   *
   * @param {number} rate
   */
  formatRatio(rate) {
    const [integer, fraction] = rate.toFixed(1).split('.');
    return `${Number(integer).toLocaleString('ko-KR')}.${fraction}`;
  },
};

export default formation;
