
import React from 'react';
import { store } from 'react-notifications-component';
import { NotificationContent } from 'components/UI/Notification';

const notification = {
  container: 'top-center',
  insert: 'top',

  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'faster', 'fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: false,
    pauseOnHover: true,
    waitForAnimation: false,
    showIcon: true,
    click: true,
    touch: true
  }
};

const addNotification = ({ message, isError }) => {
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={message} isError={isError} />),
    message,
  });
};

const notifyMessage = (message) => {
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={message} />),
    message,
  });
};

const notifyError = (message) => {
  const messageText = (message || '').replace('GraphQL error:', '');
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={messageText} isError={true} />),
    message: messageText,
  });
};

export {
  addNotification,
  notifyMessage,
  notifyError
}