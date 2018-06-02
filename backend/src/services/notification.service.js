const makeNotificationService = ({ fcm }) => ({
  sendViaFirebase: fcm.send,
  sendViaConsole: console.log,
});

export default makeNotificationService;
