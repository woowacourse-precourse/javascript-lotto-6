import { random } from '../Game/Random.js';
// 기능2. 로또 발행

export function lottoprint(buyinput) {
  let contents = [];
  for (let i = 0; i < buyinput; i++) {
    contents.push(random[i]);
  }
  return contents;
}
