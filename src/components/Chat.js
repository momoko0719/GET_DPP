import React, { useEffect } from "react";

const Chat = () => {
  return (
    <div className="chatpage">
        <div class="center-div">
          <iframe
            title="Chat"
            srcdoc="<body><script src='https://cdn.botpress.cloud/webchat/v1/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Start chat here...',
                  'botConversationDescription': 'Chat and check your Type Ⅱ diabetes risks level',
                  'botName': 'Dr.Ⅱ',
                  'botId': '13f81d84-41f9-4224-8767-2e2efd60a9ea',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v1',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '13f81d84-41f9-4224-8767-2e2efd60a9ea',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/a75cc7a4-8076-496e-b10f-03510ceeb5f0/v35342/style.css',
                  'themeName': 'prism',
                  'frontendVersion': 'v1',
                  'showPoweredBy': true,
                  'theme': 'prism',
                  'themeColor': '#2563eb',
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
            width="100%"
            height="100%"
          ></iframe>
        </div>
    </div>
  );
};

export default Chat;
