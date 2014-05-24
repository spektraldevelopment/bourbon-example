var
    messageArea = document.querySelector('#messageArea');

attachEventListener(messageArea, 'click', onMessageFocus);

function onMessageFocus(evt) {
    console.log("message focus");
    messageArea.innerHTML = '';
    detachEventListener(messageArea, 'click', onMessageFocus);
}

//Will add in a way to jump to newest chat item added in the list