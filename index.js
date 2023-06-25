/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

AppRegistry.registerComponent(appName, () => App);


PushNotification.configure({
  
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log("Ação:", notification.action);
      console.log("Notificação:", notification);
  
     
    },
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  PushNotification.localNotification({
    
    channelId: "your-channel-id", 
    ticker: "", 
    showWhen: true, 
    autoCancel: true, 
    largeIcon: "", 
    largeIconUrl: "undefined", 
    smallIcon: "", 
    bigText: "Mensagem de motivação", 
    subText: "Continue assim!", 
    bigPictureUrl: "undefined", 
    bigLargeIcon: "undefined", 
    bigLargeIconUrl: "undefined", 
    color: "system default", 
    vibrate: true, 
    vibration: 1000, 
    tag: "", 
    group: "",
    groupSummary: false, 
    ongoing: false, 
    priority: "high", 
    visibility: "public", 
    ignoreInForeground: false, 
    shortcutId: "undefined", 
    onlyAlertOnce: false, 
    
    when: null, 
    usesChronometer: false, 
    timeoutAfter: null, 
  
    messageId: "google:message_id", 
  
    actions: ["Yes", "No"], 
    invokeApp: true, 
   
    id: 0, 
    title: "Mensagem de motivação", 
    message: "Você está no caminho certo!", 
    picture: "undefined", 
    userInfo: {}, 
    playSound: true, 
    soundName: "default", 
    number: 10, 
    repeatType: "day", 
  });

  PushNotification.localNotificationSchedule({
    
    message: "Continue assim!",
    date: new Date(Date.now() + 60 * 1000), 
    allowWhileIdle: true, 
    repeatTime: 1,
  });

  PushNotification.popInitialNotification((notification) => {
    console.log('Notificação inicial', notification);
  });
  
