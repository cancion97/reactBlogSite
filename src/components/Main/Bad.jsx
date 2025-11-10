import { useState } from "react";
import React from "react";

import Thumbdown from "./../../assets/images/thumb_down_16dp_1F1F1F_FILL0_wght400_GRAD0_opsz20.svg";
import ThumbdownB from "./../../assets/images/thumb_down_16dp_5985E1_FILL1_wght400_GRAD0_opsz20.svg";

export default function BadButtonSingleState({ init = 0 }) {
  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count !== init ? count - 1 : count + 1); // likedがtrueなら減らす、falseなら増やす
  };

  return (
    <>
      <div className="badBox">
        <button
          className={count !== init ? "badButton bad" : "badButton"}
          onClick={handleClick}
        >
          <span className="badb">
            {count !== init ? (
              <img src={ThumbdownB} alt="bad済" />
            ) : (
              <img src={Thumbdown} alt="bad" />
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
