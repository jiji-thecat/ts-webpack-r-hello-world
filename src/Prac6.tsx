import { useState, useRef, useEffect } from 'react';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null) as any;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal" ref={modalRef}>
          <p>This is a modal!</p>
          <button onClick={toggleModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
