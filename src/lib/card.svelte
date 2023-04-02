<script lang="ts">
  interface Photo {
    name: string;
    original: string;
    compressed: string;
    enhanced: string;
    enhanced_and_compressed: string;
  }
  export let photo: Photo;
  const { name, original, compressed, enhanced, enhanced_and_compressed } =
    photo;
  function deletePhoto(name: string) {
    fetch(`https://api.rfs-sports.kush.in/delete?name=${name}`, {
      method: "DELETE",
    });
  }
</script>

<div class="flex flex-row w-full h-full">
  <div
    style="background-image: url({enhanced_and_compressed})"
    class="image w-1/2 h-full"
  />
  <div class="flex flex-col gap-4 w-1/2 h-full items-center justify-center">
    <a target="_blank" href={original} class="btn variant-filled-surface w-64"
      >Original</a
    >
    <a target="_blank" href={enhanced} class="btn variant-filled-surface w-64"
      >Enhanced</a
    >
    <a
      target="_blank"
      href={enhanced_and_compressed}
      class="btn variant-filled-surface w-64">Enhanced and Compressed</a
    >
    <a target="_blank" href={compressed} class="btn variant-filled-surface w-64"
      >Compressed</a
    >
  </div>
</div>

<style lang="postcss">
  .image {
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
