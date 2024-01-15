const Modal = ({ children, setIsOpen }) => {
  return (
    <div className="Modal">
      <div className="modal-content">
        <div className="close-modal bg-red" onClick={() => setIsOpen(false)}>
          x
        </div>
        {children}
      </div>
    </div>
  );
};
