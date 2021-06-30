<script lang="ts">
    import type { TwitchMessage } from "../types/TwitchMessage";
    import tmi from 'tmi.js';
    import { twitchChannel, twitchClient, twitchMessages } from '../stores/twitch';
    import { useNavigate } from "svelte-navigator";
import { speak } from "../tts";

    const navigate = useNavigate();

    let channel = "";

    const connect = () => 
    {
        if(channel.trim() === "") return;

        const options = 
        {
            channels: [
                channel
            ]
        }
        const client = tmi.Client(options);

        client.on('message', (channel, tags, message, self) => {
            const author = tags['display-name'];
            const color = tags['color'];

            const receivedMessage: TwitchMessage = {
                author,
                color,
                content: message
            };
            console.log(receivedMessage);
            
            twitchMessages.update(messages => [...messages, receivedMessage]);
            twitchChannel.set(message);

            speak(`${author} says ${message}`);
        });
        
        client.on('join', () => {
            twitchClient.set(client);
            twitchChannel.set(channel);
            navigate('/chat');
        });

        client.connect();
    }
    
</script>

<input type="text" bind:value={channel}>
<button on:click={connect}>Connect</button>

<style>
    input{
        margin-right: 1rem;
    }
</style>