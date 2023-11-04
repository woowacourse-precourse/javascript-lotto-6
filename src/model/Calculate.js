const Calculate = {
  // 로또 개수 카운트
  countLottoAmounnt: (money) => {
    return parseInt(Number(money) / 1000);
  },
};

export default Calculate;
