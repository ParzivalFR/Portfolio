const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div
        style={{
          position: "relative",
          padding: "1em",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "1em",
            top: "1em",
            background: "none",
            border: "none",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
