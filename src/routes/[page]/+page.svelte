<script lang="ts">
    export let data;
    const html = data.results.content.rendered;
</script>
<h2>{data.results.title.rendered}</h2>

{@html html}