<script lang="ts">
    import type { TwitchMessage } from "../../types/TwitchMessage";
    import Message from "../../components/Message.svelte";
    import { twitchMessages } from "../../stores/twitch";
    import { onDestroy } from "svelte";

    let messages: TwitchMessage[] = [];

    const unsubscribe = twitchMessages.subscribe(m => {messages = m});
    
    onDestroy(unsubscribe);
</script>



<main>
    {#each messages as message}
        <Message displayName={message.author} color={message.color} content={message.content}/>
    {/each}
</main>

<style>
    main{
        overflow-y: auto;
        max-height: 80%;
    }
</style>