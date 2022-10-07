import { environment } from "../environments/environment";

const sendNotification = (target: string, message: string) => {
    const key = environment.firebase.fcmKey;
    const to = target;
    const notification = {
        'title': 'Pomodoro Timer',
        'body': `${message} is over`,
        'image': 'tomato-logo.png'
    }

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'notification': notification,
            'to': to
        })
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}

export { sendNotification }