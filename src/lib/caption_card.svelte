<script lang="ts">
  import { api } from "$lib/info";
  interface Photo {
    name: string;
    tech_review: string;
    event: string;
    original: string;
    compressed: string;
    enhanced: string;
    enhanced_and_compressed: string;
  }
  export let photo: Photo;
  const { name, event, tech_review } = photo;
  function deletePhoto(name: string) {
    fetch(api + `delete?name=${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => alert(err.message));
  }
  let caption: string;
  function handleSubmit(e: SubmitEvent): void {
    if (!e.target) return;
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("name", name);
    formData.append("caption", caption);
    fetch(api + "update_caption", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => alert(err.message));
  }
</script>

<div class="flex flex-col my-4 rounded-lg overflow-hidden h-1/2 w-4/5 mx-auto">
  <h3
    class="bg-success-500/30 justify-center inline-flex items-center w-full rounded-none h-8"
  >
    {event}
  </h3>
  <div class="h-full w-full flex md:flex-row flex-col">
    <div
      style="background-image: url({tech_review})"
      class="image md:w-3/4 w-full md:h-full h-1/2"
    />
    <form
      on:submit|preventDefault={handleSubmit}
      id="caption_update"
      enctype="multipart/form-data"
      class="flex flex-col md:w-1/2 w-full md:h-full h-1/2 items-center justify-center"
    >
      <textarea
        class="textarea h-full"
        rows="4"
        name="caption"
        bind:value={caption}
        form="caption_update"
        placeholder="Enter a caption"
      />
      <button
        type="submit"
        class="btn variant-filled-success p-0 border-b-2 border-black w-full rounded-none h-1/2"
      >
        Submit
      </button>
      <button
        on:click={() => deletePhoto(name)}
        class="btn p-0 border-b-2 border-black w-full rounded-none h-1/2 variant-filled-error"
        >Reject</button
      >
    </form>
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
  .options {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 999;
    margin: 0 0;
    padding: 0 0;
    list-style: none;
    border: 1px solid #ccc;
    background-color: white;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .options li {
    padding: 0 6px;
    margin: 0 0;
    padding: 0 10px;
  }

  .options li:hover {
    background-color: #39f;
    color: white;
  }
</style>
