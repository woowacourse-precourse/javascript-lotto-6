import { MissionUtils } from '@woowacourse/mission-utils';

export const outputView = {
  async print(outputValue){
    return MissionUtils.Console.print(outputValue);
  },

  async lineBreak(){
    return MissionUtils.Console.print('');
  }
}