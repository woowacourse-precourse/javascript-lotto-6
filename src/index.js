import { MissionUtils } from "@woowacourse/mission-utils";
import App from "./App.js";

try {
  const app = new App();
  await app.play();
} catch (error) {
  console.error(error);
} 
