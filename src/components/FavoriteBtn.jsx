import { useContext, useState } from "react";
import { FavoriteFetchApi } from "../context/FavoriteFetchApi";
import ModalPortal from "./ModalPotal"; // 추가
import styles from "../styles/favoritebtn.module.scss";

const FavoriteBtn = ({ place }) => {
  const { userPlaces, addPlace, removePlace } = useContext(FavoriteFetchApi);
  const [showConfirm, setShowConfirm] = useState(false);

  // 하트 체크 함수
  const isLiked = userPlaces?.some((p) => p.id === place.id);

  // 하트 버튼 클릭 핸들링
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      setShowConfirm(true); // 삭제 모달 띄움
    } else {
      addPlace(place); // 상태 유지하면서 찜 추가
    }
  };

  const confirmDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removePlace(place.id); // 진짜 삭제 요청 보내고
    setShowConfirm(false); // 모달 닫기
  };

  const cancelDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirm(false); // 삭제 취소하고 모달만 닫기
  };

  return (
    <>
      <button onClick={handleClick} className={styles.heart}>
        {isLiked ? "♥︎" : "♡"}
      </button>

      {showConfirm && (
        <ModalPortal>
          <div className={styles.modalOverlay} onClick={cancelDelete}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <p>정말 찜을 삭제하시겠어요?</p>
              <div className={styles.modalButtons}>
                <button onClick={confirmDelete}>삭제</button>
                <button onClick={cancelDelete}>취소</button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default FavoriteBtn;
