import { useDispatch } from "react-redux";
import { getGameDetails } from "../../store/game";
import { deleteReview } from "../../store/review";
import { useModal } from "../../context/Modal";
import "./DeleteReviewModal.css";

const DeleteReviewModal = ({ id, gameId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const removeReview = async (e) => {
    e.preventDefault();
    await dispatch(deleteReview(id && id));
    await dispatch(getGameDetails(gameId));

    closeModal();
  };

  return (
    <div className="confirm-delete-container">
      <div className="confirm-delete-text">Delete Review?</div>
      <div className="confirm-delete-message">
        Are you sure you want to delete this review? This cannot be undone.
      </div>

      <div className="review-button-container">
        <button className="review-choices" onClick={removeReview}>
          Ok
        </button>
        <button className="review-choices" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteReviewModal;
