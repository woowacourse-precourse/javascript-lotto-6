const priceCheck = (price) => {
  if (price % 1000 !== 0) {
    throw new Error("[ERROR] : 단위는 1000단위로 입력해야합니다.");
  }
  return price / 1000;
};

export default priceCheck;
