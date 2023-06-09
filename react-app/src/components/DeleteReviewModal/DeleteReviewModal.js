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
  
    await dispatch(deleteReview(id));
    await dispatch(getGameDetails(gameId));

    closeModal();
  };

  return (
    <div className="confirm-delete-container">

        <div className="top-modal-bar"></div>
        <div className="confirm-delete-text">Delete Review?</div>

      <div className="confirm-delete-section">

        <div className="confirm-delete-message">
            Are you sure you want to delete this review? This cannot be undone.
        </div>

        <div className="review-button-container">
            <span className="review-ok" onClick={removeReview}>
            OK
            </span>

            <span className="review-cancel" onClick={closeModal}>
            Cancel
            </span>
        </div>

      </div>
    </div>
  );
};

export default DeleteReviewModal;
