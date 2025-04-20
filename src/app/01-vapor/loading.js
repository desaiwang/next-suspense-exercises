import React from "react";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import { range } from "@/utils";
import ArticleWrapper from "@/components/ArticleWrapper";

function CategoryLoading() {
  return (
    <ArticleWrapper>
      {range(0, 12).map((_, index) => (
        <LibraryGameCardSkeleton key={index} />
      ))}
    </ArticleWrapper>
  );
}

export default CategoryLoading;
