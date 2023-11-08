import makeLotto from "./makeLotto.js";

const lottoArrayToString = () => {
  return `[${makeLotto().join(", ")}]`;
};

export default lottoArrayToString;
