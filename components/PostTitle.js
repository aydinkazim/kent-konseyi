function PostTitle({ children }) {
  return (
    <h1 className="font-[Roboto] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 ">
      {children}
    </h1>
  );
}

export default PostTitle;
