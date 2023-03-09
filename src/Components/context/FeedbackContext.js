import React from "react";
import { createContext, useEffect } from "react";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = window.localStorage.getItem("feedback");
    return storedFeedback ? JSON.parse(storedFeedback) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    setToLocalStorage();
  }, [feedback]);

  const setToLocalStorage = () => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
    setIsLoading(false);
  };

  const updateFeedback = (id, updItm) => {
    const updatedFeedback = feedback.map((f) => {
      if (f.id === id) {
        return {
          ...f,
          ...updItm,
        };
      } else {
        return f;
      }
    });
    setFeedback(updatedFeedback);
    setToLocalStorage();
  };

  const editReview = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete feedback?`)) {
      const updatedFeedback = feedback.filter((f) => f.id !== id);
      setFeedback(updatedFeedback);
      setToLocalStorage();
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.random().toString(36).substr(2, 9);
    setFeedback([newFeedback, ...feedback]);
    setToLocalStorage();
    console.log(newFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editReview,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
