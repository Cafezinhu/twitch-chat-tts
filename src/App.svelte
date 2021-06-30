<script lang="ts">
    import Chat from "./pages/Chat/index.svelte";
    import {Router, Route} from 'svelte-navigator';
    import Connection from "./pages/Connection.svelte";

</script>

<main>
    <Router>
        <Route path="chat" component={Chat}/>
        <Route path="/" component={Connection} />
    </Router>
</main>

<style>
    main{
        background-color: #333;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>