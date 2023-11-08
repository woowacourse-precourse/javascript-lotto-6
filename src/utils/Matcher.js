const matchNumberToStringMatcher = (number) => {
  switch (number) {
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 5.5:
      return "fiveWithBonus";
    case 6:
      return "six";
    default:
      return "underTwo";
  }
};

export { matchNumberToStringMatcher };
