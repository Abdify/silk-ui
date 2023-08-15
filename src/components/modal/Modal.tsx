import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return <div>{children}</div>;
};

export default Modal;
