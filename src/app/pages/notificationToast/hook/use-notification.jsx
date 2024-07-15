import { useRef, useState } from "react";
import NotoficationToast from "../components"; // Adjust path as needed

export const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);
  const timeoutIds = useRef([]);

  const triggerNotification = (notificationProps) => {
    // Add a unique key to each notification for React rendering purposes
    const newNotification = { ...notificationProps, id: Date.now() };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    const timeoutId = setTimeout(() => {
      removeNotification(newNotification.id);
    }, notificationProps.duration || 3000); // Default duration 3 seconds

    timeoutIds.current.push(timeoutId);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    timeoutIds.current = timeoutIds.current.filter((timeoutId) =>
      timeoutId !== id
    );
  };

  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-toast">
          <NotoficationToast {...notification} />
        </div>
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};
