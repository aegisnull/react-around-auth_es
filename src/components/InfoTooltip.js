import React from "react";
import SuccessMark from "../images/success-mark.svg";

function InfoTooltip(props) {
  return (
    <div
      className={`modal modal_tooltip ${props.isOpen ? "modal_active" : ""}`}
    >
      <div className="modal__container">
        <img className="modal__tooltip-image" src={SuccessMark} alt="Success" />
        <h3 className="modal__title modal__tooltip-text">
          Success! You have now been registered.
        </h3>
        <button
          className="modal__close-button modal__close_tooltip"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
