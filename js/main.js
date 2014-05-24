var
    chatList = document.querySelector('#chatList'),
    sendButton = document.querySelector('#sendButton');

attachEventListener(sendButton, 'click', onSendMessage);

function onSendMessage(evt) {
    console.log('onSendMessage');
    insertMessage('Samuel L. Jackson', 'What?!');
}


function insertMessage(userID, msg) {

    var cItem = document.createElement('div');
    cItem.setAttribute('class', 'chatItem');

    var cName = document.createElement('div');
    cName.setAttribute('class', 'chatName');
    cName.innerHTML = userID;
    cItem.appendChild(cName);

    var cMessage = document.createElement('div');
    cMessage.setAttribute('class', 'chatMessage');
    cMessage.innerHTML = msg;
    cItem.appendChild(cMessage);

    var cTime = document.createElement('div');
    cTime.setAttribute('class', 'chatTime');
    cTime.innerHTML = '8:00pm';

    cItem.appendChild(cTime);

    chatList.appendChild(cItem);


    console.log('insertMessage');
}

//////////////////
////ATTACH EVENT LISTENER
/////////////////
function attachEventListener(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler, false);
    } else if (eventTarget.attachEvent) {
        eventType = "on" + eventType;
        eventTarget.attachEvent(eventType, eventHandler);
    } else {
        eventTarget["on" + eventType] = eventHandler;
    }
}

//////////////////
////DETACH EVENT LISTENER
/////////////////
function detachEventListener(eventTarget, eventType, eventHandler) {
    if (eventTarget.removeEventListener) {
        eventTarget.removeEventListener(eventType, eventHandler, false);
    } else if (eventTarget.detachEvent) {
        eventType = "on" + eventType;
        eventTarget.detachEvent(eventType, eventHandler);
    } else {
        eventTarget["on" + eventType] = null;
    }
}