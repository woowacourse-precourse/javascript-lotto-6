const changeStringToMoney = (string) => {
  return Number(string.replaceAll(',', ''));
};

export { changeStringToMoney };
