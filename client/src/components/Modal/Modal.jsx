import "./modal.scss";
const Modal = ({ children, setIsOpen, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div
              className="close-modal bg-red"
              onClick={() => setIsOpen(false)}
            >
              x
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
