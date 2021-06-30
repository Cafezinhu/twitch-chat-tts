<script>
    export let displayName;
    export let color;
    export let content;
</script>
<div>
    <b style="color: {color}">
        {displayName}
    </b>: {content}
</div>
<style>
    div{
        color: #FFF;
    }
</style>