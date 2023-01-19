import React from "react";
import React, { useEffect, useState } from 'react';

function QuestionList() {
  const quizList = questions.map((question) => <QuestionItem key={question.id} question={question} handleQuizDelete={onDeleteQuiz} handleQuizUpdate={onUpdateQuiz}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizList}</ul>
    </section>
  );
}

export default QuestionList;
