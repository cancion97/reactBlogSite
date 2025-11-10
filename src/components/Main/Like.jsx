import { useState } from "react";
import React from "react";
// import React from "react";
import Thumbup from "./../../assets/images/thumb_up_16dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import ThumbupR from "./../../assets/images/thumb_up_16dp_EA3323_FILL1_wght400_GRAD0_opsz20.svg";

export default function LikeButtonSingleState({ init = 0 }) {
  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count !== init ? count - 1 : count + 1); // likedがtrueなら減らす、falseなら増やす
  };

  return (
    <>
      <div className="likeBox">
        <button
          className={count !== init ? "likeButton like" : "likeButton"}
          onClick={handleClick}
        >
          <span className="likeb">
            {count !== init ? (
              <img src={ThumbupR} alt="いいね済" />
            ) : (
              <img src={Thumbup} alt="いいね" />
            )}
          </span>

          <span className="count" style={{ color: "black" }}>
            {count}
          </span>
        </button>
      </div>
    </>
  );
}
