import React from "react";

import ArticleWrapper from "./ArticleWrapper";
import Spinner from "@/components/Spinner";

async function CategoryLoading() {
  return (
    <ArticleWrapper>
      <Spinner />
    </ArticleWrapper>
  );
}

export default CategoryLoading;
