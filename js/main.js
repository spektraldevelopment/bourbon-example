var
    mainSection = document.querySelector('#mainSection'),
    startScreen = document.querySelector('#startScreen'),
    nameField = document.querySelector('#enterName'),
    joinButton = document.querySelector('#joinButton'),
    users = [], i;

users = [
    {userID: "Samuel L. Jackson"},
    {userID: "Frank Underwood"},
    {userID: "Walter White"}
]

UIDefaults.input(nameField);

attachEventListener(joinButton, 'click', onJoin);

function onJoin() {
    removeElement(startScreen);
    initChat();
}

function initChat() {

    //Create user section
    var userSection = document.createElement('section');
    userSection.setAttribute('id', 'userSection');
    mainSection.appendChild(userSection);

    var userList = document.createElement('ul');
    userList.setAttribute('id', 'userList');
    userSection.appendChild(userList);

    var user;

    for (i = 0; i < users.length; i += 1) {
        user = document.createElement('li');
        user.setAttribute('class', 'user');
        user.innerHTML = users[i].userID;
        userList.appendChild(user);
    }

    //Create chat section
    var chatSection = document.createElement('section');
    chatSection.setAttribute('id', 'chatSection');
    mainSection.appendChild(chatSection);

    var chatList = document.createElement('div');
    chatList.setAttribute('id', 'chatList');
    chatSection.appendChild(chatList);

    //Create message section
    var messageSection = document.createElement('section');
    messageSection.setAttribute('id', 'messageSection');
    mainSection.appendChild(messageSection);

    var messageArea = document.createElement('textarea');
    messageArea.setAttribute('id', 'messageArea');
    messageArea.innerHTML = 'Say Something';
    UIDefaults.textArea(messageArea);
    messageSection.appendChild(messageArea);

    var sendButton = document.createElement('button');
    sendButton.setAttribute('id', 'sendButton');
    sendButton.setAttribute('type', 'button');
    sendButton.innerHTML = 'Send';
    messageSection.appendChild(sendButton);

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

        scrollToLastItem();
        console.log('insertMessage');
    }

    function scrollToLastItem() {
        var chatChildren = chatList.children, i, totalChatHeight = 0;
        for (i = 0; i < chatChildren.length; i += 1) {
            totalChatHeight += stringToNum(getStyle(chatChildren[i], 'height'));
        }
        chatList.scrollTop = totalChatHeight;
    }
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

//////////////////
////GET STYLE
//////////////////
function getStyle(element, styleProperty) {

    styleProperty = styleProperty || undefined;
    var style;
    if(styleProperty !== undefined) {
        try {
            style = element.currentStyle[styleProperty];
        } catch (err) {
            style = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProperty);
        }
    }
    return style;
}

//////////////////
////STRING TO NUM
//////////////////
function stringToNum(str) {
    return parseInt(str, 10);
}

//////////////////
////REMOVE ELEMENT
//////////////////
function removeElement (element) {
    try {
        element.remove();
    } catch (err) {
        element.parentNode.removeChild(element);
    }
}