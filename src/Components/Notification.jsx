import React, { useState } from "react";
import NotificationIcon from "../assets/images/notification.svg";
import ChangeIcon from "../assets/images/change-icon.svg";
import PaymentReceivedIcon from "../assets/images/payment-received.svg";
import PaymentCancelledIcon from "../assets/images/payment-cancelled.svg";
import UserActionIcon from "../assets/images/user-action.svg";
import NoDataIcon from "../assets/images/no-data.svg";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "change",
      message: "Lincoln Philips Change Invoice Theme.",
      time: "5 min ago",
      details: "Change Invoice Theme",
    },
    {
      id: 2,
      type: "bill",
      message: "Created Bill by Dr.bharat.",
      time: "5 min ago",
    },
    {
      id: 3,
      type: "payment_received",
      message: "24,668 is the payment done of Miracle Canter.",
      time: "1:52PM",
    },
    {
      id: 4,
      type: "payment_cancelled",
      message: "24,668 is the payment Cancelled of Miracle Canter.",
      time: "1:52PM",
    },
  ]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getIcon = (type) => {
    switch (type) {
      case "change":
        return ChangeIcon;
      case "bill":
        return UserActionIcon;
      case "payment_received":
        return PaymentReceivedIcon;
      case "payment_cancelled":
        return PaymentCancelledIcon;
      case "user_action":
        return UserActionIcon;
      default:
        return NotificationIcon;
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell Icon */}
      <div
        className="relative bg-grey rounded-full p-2 shadow-md cursor-pointer flex justify-center items-center"
        onClick={togglePopup}
      >
        <img
          src={NotificationIcon}
          alt="Notification Bell"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </div>

      {/* Notification Popup */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-10">
          <div className="flex justify-between items-center">
            {/* Notification Title */}
            <h3 className="font-semibold text-lg">Notifications</h3>

            {/* Close Button */}
            <button
              className="text-red hover:text-red font-bold"
              onClick={togglePopup}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Notifications List */}
          {notifications.length > 0 ? (
            <ul className="mt-2 space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="flex items-start space-x-3 border-b pb-3 last:border-b-0"
                >
                  {/* Notification Icon */}
                  <img
                    src={getIcon(notification.type)}
                    alt={`${notification.type} icon`}
                    className="w-8 h-8"
                  />

                  {/* Notification Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      {notification.message}
                    </p>
                    {notification.details && (
                      <p className="text-sm text-blue-500 underline">
                        {notification.details}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center mt-4">
              {/* No Notifications Found */}
              <img
                src={NoDataIcon}
                alt="No Notifications"
                className="w-24 h-24"
              />
              <p className="text-gray-600 mt-2">No Notifications Found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
