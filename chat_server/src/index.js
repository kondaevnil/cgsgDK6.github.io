import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

// <!DOCTYPE html>

// <html>

// <head>
//   <link rel="stylesheet" href="style.css" />

//   <script src="/socket.io/socket.io.js"></script>

//   <script type="text/javascript">
//     let socket = io();
//     const user = "user";


//     function sendMessage() {
//       let msg = {
//         name: document.getElementById("name").value.slice(0, 54),
//         message: document.getElementById("input").value.slice(0, 1024),
//       };

//       msg.message = msg.message.trim();

//       if (msg.name != "" && msg.message != "") {
//         socket.emit("chat message", JSON.stringify(msg));
//       }
//       document.getElementById("input").value = "";
//     }

//     function getMessage(message) {
//       let outMessages = document.getElementById("outMessage");
//       let user_name_unit = document.createElement("p");
//       let user_message_unit = document.createElement("p");
//       let message_block = document.createElement("div");

//       user_message_unit.classList.add("userMessage");
//       user_name_unit.classList.add("userName");
//       message_block.classList.add("divUserMessage");

//       user_name_unit.innerText = `${message.name}:`;
//       user_message_unit.innerText = message.message;

//       message_block.appendChild(user_name_unit);
//       message_block.appendChild(user_message_unit);
//       outMessages.appendChild(message_block);

//       scroll(0, document.body.scrollHeight);
//     }

//     socket.on("chat message", (msg) => {
//       getMessage(JSON.parse(msg));
//     });

//     function setUserCookie(value) {
//       if (value != "") {
//         document.cookie = encodeURIComponent(user) + "=" + encodeURIComponent(value)
//       }
//     }

//     function sendEnter(event) {
//       if ((event.which == 13 || event.keyCode == 13) && !event.shiftKey) {
//         sendMessage();
//       }
//     }

//     function getCookie(name) {
//       let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//       ));
//       return matches ? decodeURIComponent(matches[1]) : undefined;
//     }

//     function onLoad() {
//       let input = document.getElementById("name");
//       let cookie = getCookie(user);

//       if (cookie != undefined) {
//         input.value = cookie;
//       }
//     }
//   </script>
// </head>

// <body onload="onLoad();">
//   <div class="divDefault divMain">
//     <div id="a" class="divImage"></div>
//     <div id="userInterection" class="divDefault">
//       <div id="userInput" class="divUserInterection">
//         <input id="name" class="input" placeholder="username" onchange="setUserCookie(this.value);" />
//         <textarea id="input" placeholder="message" class="textarea" onkeypress="sendEnter(event);"></textarea>
//         <button onclick="sendMessage();" class="button">sent</button>
//       </div>
//     </div>
//     <div id="outMessage" class="divOutMessage"></div>
//   </div>
// </body>

// </html>