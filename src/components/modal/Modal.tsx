import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return <button>{children}</button>;
};

export default Modal;
