import React from "react";
import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

const FeedbackRating = () => {
  const { feedback } = useContext(FeedbackContext);

  let average = feedback.reduce((acc, next) => {
    return acc + next.rating;
  }, 0);

  average = average / feedback.length;
  average = isNaN(average) ? 0 : average.toFixed(2);

  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length === 1
          ? `${feedback.length} review`
          : `${feedback.length} reviews`}
      </h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackRating;
