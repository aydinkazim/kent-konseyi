import React from "react";
import PostTitle from "./PostTitle";
import PostCoverImage from "./PostCoverImage";

function PostHeader({ title, coverImage, date, width, height }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostCoverImage
          title={title}
          src={coverImage}
          height={height}
          width={width}
        />
      </div>
    </>
  );
}

export default PostHeader;
