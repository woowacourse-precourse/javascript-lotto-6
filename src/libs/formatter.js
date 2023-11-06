function formatArrayToString(array) {
  const string = `[${array.map((element) => `${element}`).join(", ")}]`;
  return string;
}

export { formatArrayToString };
