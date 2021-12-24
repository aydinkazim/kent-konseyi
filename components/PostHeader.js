import React from "react";
import PostTitle from "./PostTitle";
import PostCoverImage from "./PostCoverImage";

function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostCoverImage
          title={title}
          src={coverImage}
          height={300}
          width={1240}
        />
      </div>
    </>
  );
}

export default PostHeader;
