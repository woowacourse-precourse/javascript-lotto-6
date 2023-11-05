class Inspector {
  containNumberOnly (number) {
    const regExpNumber = /^\d+$/g;
    if (number.match(regExpNumber)) {
      return true;
    } else {
      return false;
    };
  }

  getIsThousand (number) {
    return number % 1000 === 0;
  }
}

export default Inspector;