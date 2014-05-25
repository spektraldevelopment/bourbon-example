(function(window){
    "use strict";
    var UIDefaults = {};

    UIDefaults.textArea = function (element) {
        attachEventListener(element, 'click', onTextFocus);

        function onTextFocus(evt) {
            element.innerHTML = '';
            detachEventListener(element, 'click', onTextFocus);
        }
    }

    UIDefaults.list = function (element) {

    }

    UIDefaults.input = function (element) {
        attachEventListener(element, 'click', onInputFocus);
        function onInputFocus(evt) {
            console.log('input focus');
            element.value = '';
            detachEventListener(element, 'click', onInputFocus);
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

    function stringToNum(str) {
        return parseInt(str, 10);
    }

    window.UIDefaults = UIDefaults;

}(window));

//var
//    messageArea = document.querySelector('#messageArea');
//
//attachEventListener(messageArea, 'click', onMessageFocus);
//
//function onMessageFocus(evt) {
//    console.log("message focus");
//    messageArea.innerHTML = '';
//    detachEventListener(messageArea, 'click', onMessageFocus);
//}

//Will add in a way to jump to newest chat item added in the list