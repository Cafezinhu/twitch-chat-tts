const channelInput = document.querySelector("#channel-input");


function start()
{
    const options = 
    {
        channels: [
            channelInput.value
        ]
    }
    const client = tmi.Client(options);
    client.connect();

    client.on('message', (channel, tags, message, self) => 
    {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        speak(`${displayName} disse ${message}`);
    });
}

function speak(text)
{
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}
