import React from "react";

function InfoTooltip() {
  return (
    <div className="modal modal_active">
      <div className="modal__container">
        <h2 className="modal__title">Success! You have now been registered.</h2>
        <button className="modal__close-button modal__close_tooltip" />
      </div>
    </div>
  );
}

export default InfoTooltip;
