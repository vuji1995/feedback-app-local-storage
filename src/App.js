import React from "react";
import Header from "./Components/Header";
import FeedbackRating from "./Components/FeedbackRating";
import FeedbackList from "./Components/Feedbacklist";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from "./Components/context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Header></Header>
      <div className="container">
        <FeedbackForm></FeedbackForm>
        <FeedbackRating></FeedbackRating>
        <FeedbackList></FeedbackList>
      </div>
    </FeedbackProvider>
  );
}

export default App;
