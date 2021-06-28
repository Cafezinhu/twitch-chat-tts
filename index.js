const channelInput = document.querySelector("#channel-input");
const connectedMessage = document.querySelector('#connected-message');


function start()
{
    connectedMessage.textContent = "Connecting...";
    const options = 
    {
        channels: [
            channelInput.value
        ]
    }
    const client = tmi.Client(options);
    

    client.on('join', () => {
        connectedMessage.textContent = "Connected!"
    });

    client.on('message', (channel, tags, message, self) => 
    {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        speak(`${displayName} says ${message}`);
    });

    client.connect();
}

function speak(text)
{
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}
