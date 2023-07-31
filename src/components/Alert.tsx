import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  const hideButton = () => console.log("Hello");

  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <button onClick={onClose} type="button" className="btn-close">
        <span aria-hidden="true">Close</span>
      </button>
    </div>
  );
};

export default Alert;
