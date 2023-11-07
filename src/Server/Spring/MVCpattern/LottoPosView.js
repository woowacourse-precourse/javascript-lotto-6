/**
 * View객체
 * View 객체에게 클라이언트에게 전달할 응답 데이터 생성을 요청합니다.
 */
import HttpResponse from '../Objects/HttpResponse.js';

class LottoPosView {
  generateHttpResponse(status, model) {
    return HttpResponse(status, model);
  }
}

export default LottoPosView;
