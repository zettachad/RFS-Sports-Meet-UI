<script lang="ts">
  export let data: any;
  import Card from "$lib/card.svelte";
  interface photo {
    name: string;
    original: string;
    compressed: string;
    enhanced: string;
    enhanced_and_compressed: string;
  }
  const photos: photo[] = data.photos;
</script>

{#each photos as photo}
  <Card {photo} />
{/each}
