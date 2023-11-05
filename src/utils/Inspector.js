class Inspector {
  containNumberOnly (number) {
    const regExpNumber = /^\d+$/g;
    if (number.match(regExpNumber)) {
      return true;
    } else {
      return false;
    };
  }
}

export default Inspector;