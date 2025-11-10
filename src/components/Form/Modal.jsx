import { useState } from "react";
import Button from "../Button";
import ModalWindow from "./ModalWindow";
import Closebtn from "./../../assets/images/close.svg";

export default function StateModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button classname="modalButton" btnname="Feedback" onClick={openModal} />
      <div className="modalWrapper">
        {isOpen && (
          // modalOverlayはモーダルが出た時の背景
          <div className="modalOverlay" onClick={closeModal}>
            {/* モーダルの表示される画面 */}
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              {/* モーダルとして表示したい内容 */}
              <ModalWindow />
              <button className="closeButton" onClick={closeModal}>
                <img src={Closebtn} alt="閉じる" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
