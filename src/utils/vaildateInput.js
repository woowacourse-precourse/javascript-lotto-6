function validatePriceInput(priceInput) {
  if (isNaN(priceInput)) {
    throw new Error("[ERROR]숫자를 입력해야합니다.");
  }

  if (Number(priceInput) < 0) {
    throw new Error("[ERROR]올바른 숫자 형식이 아닙니다.");
  }

  if (Number(priceInput) % 1000) {
    throw new Error("[ERROR] 로또 가격은 하나당 1000원 입니다.");
  }

  const price = Number(priceInput) / 1000;

  return price;
}

export { validatePriceInput };
