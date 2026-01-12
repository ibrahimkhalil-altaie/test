importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// نفس الإعدادات السابقة
firebase.initializeApp({
    apiKey: "AIzaSyClDg3RqYaqlR607TQUF-wzwhy74eMgylM",
    authDomain: "jalawla-preparatory-school.firebaseapp.com",
    projectId: "jalawla-preparatory-school",
    storageBucket: "jalawla-preparatory-school.firebasestorage.app",
    messagingSenderId: "59171255458",
    appId: "1:59171255458:web:f66a1308b777eb9eff13fb"
});

const messaging = firebase.messaging();

// التعامل مع الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('استلمت إشعاراً في الخلفية: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // اختياري
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

