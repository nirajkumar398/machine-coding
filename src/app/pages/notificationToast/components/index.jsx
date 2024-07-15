import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./style.css";
const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};
const NotoficationToast = ({ type = "info", message, onClose = () => {} }) => {
  console.log("Newewtwtwt")
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose color="white" onClick={onClose} className="closeBtn"/>
    </div>
  );
};

export default NotoficationToast;
