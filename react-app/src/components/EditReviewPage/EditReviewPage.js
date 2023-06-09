// import {React, useEffect, useState} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import { updateReview } from "../../store/review";
// import "./EditReviewPage.css";

// const EditReviewPage = (review) => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const {reviewId} = useParams();
//     const [review, setReview] = useState('');
//     const [recommended, setRecommended] = useState(true);
//     const [errors, setErrors] = useState('');

//     const userId = useSelector(state => state?.session?.user.id)

//     const game = useSelector(state => state?.game)

//     const gameId = game?.details.id

//     const reviews = useSelector(state => state.reviews)

//     useEffect(() => {
//         const validationErrors = [];
//         if(!review.length) {
//             validationErrors.push("Please enter a minimum of 1 character.");
//         }
//     }, [review])

//     const handleEdit = async(e) => {
//         e.preventDefault();

//         const reviewFormInput = {
//             ...review,
//             review,
//             recommended,
//             user_id: userId,
//             game_id: gameId
//         }

//         let edited;

//         edited = await dispatch(updateReview(reviewId, reviewFormInput));

//         if(edited) {
//             history.push(`/games/${gameId}`)
//         }
//     }

//     return (
//         <div className="edit-review-page">
//             <div className="edit-profile-header"></div>

//             <div className="review-page-content">
//                 <div className="review-left-cont"></div>
//             </div>

//             <div className="review-right-cont">
//                 <div className="review-right-actions">
//                     <div className="review-game-art"></div>
//                     <div className="review-gamepage"></div>
//                 </div>

//                 <div className="owner-controls">
//                     <div className="owner-edit"></div>
//                     <div className="owner-delete"></div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default EditReviewPage;
