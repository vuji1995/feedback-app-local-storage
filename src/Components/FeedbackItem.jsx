import React from "react";
import Card from "./shared/card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

function FeedbackItem({ item }) {
  const { deleteFeedback, editReview } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit" onClick={() => editReview(item)}>
        <FaEdit color="purple"></FaEdit>
      </button>
    </Card>
  );
}

export default FeedbackItem;
