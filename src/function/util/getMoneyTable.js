export const getMoneyTable = (table) => {
  if (table === "3") {
    return "5,000원";
  }

  if (table === "4") {
    return "50,000원";
  }

  if (table === "5") {
    return "1,500,000원";
  }

  if (table === "불일치5") {
    return "30,000,000원";
  }

  if (table === "6") {
    return "2,000,000,000원";
  }
};
