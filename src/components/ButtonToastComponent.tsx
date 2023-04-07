import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

type Props = {
  toastMessage: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonToastComponent = (props: Props) => {
  const { toastMessage, show, setShow } = props;
  function handleOnclose() {
    setShow(!show);
  }
  return (
    <Toast
      onClose={handleOnclose}
      delay={1500}
      // autohide
      show={show}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontStyle: 'italic',
        boxShadow: 'none',
      }}
    >
      {toastMessage}
    </Toast>
  );
};

export default ButtonToastComponent;
