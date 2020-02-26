// src/components/LikeCounter.js
import React, { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  const reset = () => {
    console.log('Yes, clicked RESET.')
    set_numLikes(initial_numLikes)
  }

  const initLike = true;
  const [like, setLikes] = useState(initLike); // <- using state!
  const likeMe = like ? 'Like' : 'Unlike'
  const setLike = () => {
    console.log('Clicked', like)
    setLikes(like === false)
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
      <p>
      <button onClick={setLike}>{likeMe}</button>
      </p>
    </div>
  );
}