const CreatePost = () => {
  return (
    <div className="w-full bg-postsColor p-4 flex justify-between rounded-md items-center gap-3">
      <div className="image">
        <img
          src="/src/assets/images/User.png"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="bg-[#3a3b3c] text-left w-full py-3 pl-3 rounded-3xl cursor-pointer hover:bg-[#4f5052]">
        What&apos;s on your mind, Motaz?
      </div>
    </div>
  );
};

export default CreatePost;
