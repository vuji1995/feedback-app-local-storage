import React from "react";
import Card from "./shared/card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";
import FeedbackContext from "./context/FeedbackContext";
import { useContext, useEffect } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState(``);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState(``);
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChangeEvent = (e) => {
    setText(e.target.value);

    if (text === ``) {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== `` && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage(`Enter at least 10 characters for review`);
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
  };

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText(``);
    }
  };

  return (
    <Card>
      <form onSubmit={handleAddFeedback}>
        <h2>How would you rate our services?</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            placeholder="Type your review"
            onChange={handleChangeEvent}
            type="text"
            value={text}
          ></input>
          <Button type="submit" isDisabled={isDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
