const addNumber = (number, bonusNumber) => {
  if (number.includes(bonusNumber)) {
    throw new Error("[ERROR]: 겹치는 숫자 발생");
  }

  return number.concat(bonusNumber);
};

export default addNumber;
