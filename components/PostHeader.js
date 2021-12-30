import React from "react";
import PostTitle from "./PostTitle";
import PostCoverImage from "./PostCoverImage";

function PostHeader({ title, coverImage, width, height, alt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostCoverImage
          title={title}
          src={coverImage}
          height={height}
          width={width}
          alt={alt}
        />
      </div>
    </>
  );
}

export default PostHeader;
