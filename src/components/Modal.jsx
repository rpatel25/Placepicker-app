import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, children }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
}
