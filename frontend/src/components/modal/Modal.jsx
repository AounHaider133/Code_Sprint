import "./modal-style.css";

const Modal = ({ title, text, onClose }) => {
  return (
    <div
      className="modal-container"
      style={{ "--m-background": "hsla(0, 0%, 0%, .4)" }}
    >
      <div className="modal">
        <h1 className="modal__title">{title}</h1>
        <p className="modal__text">{text}</p>
        <button className="modal__btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
