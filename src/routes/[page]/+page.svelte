<script lang="ts">
    export let data;
    const html = data.results.content.rendered;
</script>

{@html html}