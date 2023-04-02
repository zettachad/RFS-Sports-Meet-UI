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
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => alert(err.message));
  }
</script>

<div
  class="bg-tertiary-400/20 rounded-xl overflow-hidden md:h-80 h-4/6 my-6 flex md:flex-row flex-col w-3/4 mx-auto"
>
  <div
    style="background-image: url({enhanced_and_compressed})"
    class="image md:w-1/2 w-full md:h-full h-1/2"
  />
  <div
    class="flex flex-col gap-2 md:w-1/2 w-full md:h-full h-1/2 items-center justify-center"
  >
    <a target="_blank" href={original} class="btn w-3/4 variant-filled-surface"
      >Original</a
    >
    <a target="_blank" href={enhanced} class="btn w-3/4 variant-filled-surface"
      >Enhanced</a
    >
    <a
      target="_blank"
      href={enhanced_and_compressed}
      class="btn w-3/4 variant-filled-surface">Enhanced and Compressed</a
    >
    <a
      target="_blank"
      href={compressed}
      class="btn w-3/4 variant-filled-surface">Compressed</a
    >
    <button
      on:click={() => deletePhoto(name)}
      class="btn w-3/4 variant-ghost-error">Delete</button
    >
  </div>
</div>

<style lang="postcss">
  .image {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
