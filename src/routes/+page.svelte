<script lang="ts">
    export let data;
    let html = data.results.content.rendered;
</script>

{@html html}