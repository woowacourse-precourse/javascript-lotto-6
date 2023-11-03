/* eslint-disable import/extensions */
/**
 * ViewResolver역할
 * ViewResolver는 View 정보에 해당하는 View를 찾아서 DispatcherServlet에게 반환합니다.
 * 여기서는 항상 LottoPosView객체를 반환받는다고 가정
 */
import LottoPosView from './LottoPosView.js';

class ViewResolver {
  // eslint-disable-next-line class-methods-use-this
  getView() {
    // if (viewName === CONSTANTS.LottoPos) 생략
    return new LottoPosView();
  }
}

export default ViewResolver;
