export const getMoneyTable = (table) => {
  switch (table) {
    case "3":
      return "5,000원";

    case "4":
      return "50,000원";

    case "5":
      return "1,500,000원";

    case "볼일치5":
      return "30,000,000원";

    case "6":
      return "2,000,000,000원";
  }
};
