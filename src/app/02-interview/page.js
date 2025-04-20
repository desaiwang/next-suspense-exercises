import React from "react";

import { getComments } from "@/helpers/interview-helpers";
import Comment from "@/components/Comment";
import ArticleWrapper from "./ArticleWrapper";

export const dynamic = "force-dynamic";

async function InterviewExercise() {
  const comments = await getComments();

  return (
    <ArticleWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ArticleWrapper>
  );
}

export default InterviewExercise;
