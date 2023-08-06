import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";


const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className=" border-black border-b-2 py-4 w-6/12 m-auto">
            <p className=" font-bold text-[24px]">{post.title}</p>
            <p className="font-thin text-[16px]"> 
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p className="font-semibold">Posted on {post.date}</p>
            <p className="mt mt-2">{post.content}</p>
            <div className="">
              {post.tags.map((tag,index) => {
                return <span key={index}>{`${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
