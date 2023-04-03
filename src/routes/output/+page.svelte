<script lang="ts">
  export let data: any;
  import Card from "$lib/output_card.svelte";
  interface photo {
    name: string;
    event: string;
    tech_review: string;
    caption: string;
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
