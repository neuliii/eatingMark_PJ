import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default function ModalPortal({ children }) {

  // 자식 컴포넌트(children)를 특정 DOM 노드(여기선 #modal-root)에 렌더링해주는 역할
  // 이 모달을 띄워주기 위해 body에 모달 부분을 추가 해주어야 함
  return createPortal(children, modalRoot);
}