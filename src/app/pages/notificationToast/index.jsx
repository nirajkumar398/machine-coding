import NotoficationToast from "./components";
import { useNotification } from "./hook/use-notification";

const Notification = () => {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");

  return (
    <div>
      Notification Page
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            message: "File Sent Successfully!",
            duration: 2000,
          })
        }
      >
        Trigger Warning
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "File Sent Successfully!",
            duration: 2000,
          })
        }
      >
        Trigger Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File Sent Successfully!",
            duration: 2000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "File Sent Successfully!",
            duration: 2000,
          })
        }
      >
        Trigger Info
      </button>
      {NotificationComponent}
    </div>
  );
};

export default Notification;
