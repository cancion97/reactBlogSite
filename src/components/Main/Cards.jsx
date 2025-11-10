import React from "react";
import LikeButtonSingleState from "./Like";
import BadButtonSingleState from "./Bad";

// import React from "react";
import Thumbup from "./../../assets/images/thumb_up_16dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import ThumbupR from "./../../assets/images/thumb_up_16dp_EA3323_FILL1_wght400_GRAD0_opsz20.svg";

import { useState } from "react";

//keyはそれぞれ違う値であればいい。
//オブジェクトの中身でもいい
export default function ForList({ src, init }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count !== init ? count - 1 : count + 1); // likedがtrueなら減らす、falseなら増やす
  };
  return (
    <div className="listwrap">
      <dl>
        {src.map((elem, index) => (
          <React.Fragment key={index}>
            <div className="postItem">
              <dt>
                <img className="postimg" src={elem.image} alt="写真" />
              </dt>
              <div className="text_wrap">
                <div className="textBox">
                  <dt>
                    <h3
                      style={{ fontSize: "15px" }}
                    >{`[${elem.category}] ${elem.title}`}</h3>
                  </dt>
                  <dd style={{ fontSize: "12px" }}>{elem.author}</dd>
                </div>

                <div className="likebadbox">
                  <LikeButtonSingleState init={elem.thumbsUp} />
                  <BadButtonSingleState init={elem.thumbsDown} />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}
