import { useContext, useState } from "react";
import { FavoriteFetchApi } from "../context/FavoriteFetchApi";
import ModalPortal from "./ModalPortal"; // 추가
import styles from "../styles/favoritebtn.module.scss";

const FavoriteBtn = ({ place }) => {
  const { userPlaces, addPlace, removePlace } = useContext(FavoriteFetchApi);
  const [showConfirm, setShowConfirm] = useState(false);

  // 하트 체크 함수
  const isLiked = userPlaces?.some((p) => p.id === place.id);

  const handleFavoriteAction = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
  
    switch (action) {
      case "toggle":
        if (isLiked) {
          setShowConfirm(true); // 삭제 확인 모달 표시
        } else {
          addPlace(place); // 찜 추가
        }
        break;
      case "confirm":
        removePlace(place.id); // 찜 삭제
        setShowConfirm(false); // 모달 닫기
        break;
      case "cancel":
        setShowConfirm(false); // 모달 닫기만
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button onClick={(e) => handleFavoriteAction(e, "toggle")} className={styles.heart}>
        {isLiked ? "♥︎" : "♡"}
      </button>

      {showConfirm && (
        <ModalPortal>
          <div className={styles.modalOverlay} onClick={(e) => handleFavoriteAction(e, "cancel")}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <p>정말 찜을 삭제하시겠어요?</p>
              <div className={styles.modalButtons}>
                <button onClick={(e) => handleFavoriteAction(e, "confirm")}>삭제</button>
                <button onClick={(e) => handleFavoriteAction(e, "cancel")}>취소</button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default FavoriteBtn;
