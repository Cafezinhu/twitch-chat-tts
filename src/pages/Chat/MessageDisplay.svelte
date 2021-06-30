<script lang="ts">
    import type { TwitchMessage } from "../../types/TwitchMessage";
    import Message from "../../components/Message.svelte";
    import { twitchMessages } from "../../stores/twitch";
    import { onDestroy } from "svelte";

    let messages: TwitchMessage[] = [];

    const unsubscribe = twitchMessages.subscribe(m => {messages = m});
    
    onDestroy(unsubscribe);
</script>



<div class="content">
    <div class="chat">
        {#each messages as message}
            <Message displayName={message.author} color={message.color} content={message.content}/>
        {/each}
    </div>
</div>

<style>
    .content{
        overflow-y: auto;
        max-height: 80vh;
    }
    .chat{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>