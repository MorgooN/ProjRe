import { Component, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { CreateForm } from "../create-post/create-form";
import { Post } from "./post";

export interface Post {
  id: string;
  user: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postsLists, setPostsList] = useState<Post[] | null>(null);
  const postRef = collection(db, "posts"); // reference to collection

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsLists?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
