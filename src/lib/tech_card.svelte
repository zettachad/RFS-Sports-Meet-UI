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
  const {
    name,
    tech_review,
    event,
    original,
    compressed,
    enhanced,
    enhanced_and_compressed,
  } = photo;
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
  let option: string | null;
  function handleSubmit(e: SubmitEvent): void {
    if (!e.target) return;
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("name", name);
    formData.append("option", option || "");
    fetch(api + "update_tech", {
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

<div class="flex flex-col my-4 rounded-lg overflow-hidden h-3/4 w-4/5 mx-auto">
  <h3
    class="bg-success-500/30 justify-center inline-flex items-center w-full rounded-none h-8"
  >
    {event}
  </h3>
  <div class="h-full w-full flex md:flex-row flex-col">
    <div
      style="background-image: url({enhanced_and_compressed})"
      class="image md:w-3/4 border-white border-2 w-full md:h-full h-1/2"
    />
    <form
      on:submit|preventDefault={handleSubmit}
      id="tech_review"
      enctype="multipart/form-data"
      class="flex flex-col md:w-1/2 w-full md:h-full h-1/2 items-center justify-center"
    >
      <a
        target="_blank"
        href={original}
        class="btn p-2 border-b-2 border-black w-full rounded-none h-full variant-filled-primary"
        >Original</a
      >
      <a
        target="_blank"
        href={enhanced}
        class="btn p-2 border-b-2 border-black w-full rounded-none h-full variant-filled-primary"
        >Enhanced</a
      >
      <a
        target="_blank"
        href={enhanced_and_compressed}
        class="btn p-2 border-b-2 border-black w-full rounded-none h-full variant-filled-primary"
        >Enhanced and Compressed</a
      >
      <a
        target="_blank"
        href={compressed}
        class="btn p-2 border-b-2 border-black w-full rounded-none h-full variant-filled-primary"
        >Compressed</a
      >
      <select
        bind:value={option}
        form="tech_review"
        class="select border-b-2 border-black  p-2 h-full rounded-none"
      >
        <option value="enhanced_and_compressed">ehnanced and compressed</option>
        <option value="enhanced">enhanced</option>
        <option value="compressed">compressed</option>
        <option value="original">original</option>
        <option value="custom">custom</option>
      </select>
      <div class="btn p-2 hidden">
        <input class="input" type="file" />
      </div>
      <button
        type="submit"
        class="btn variant-filled-success p-2 border-b-2 border-black w-full rounded-none h-full "
      >
        Approve
      </button>
      <button
        on:click={() => deletePhoto(name)}
        class="btn p-2 border-b-2 border-black w-full rounded-none h-full variant-filled-error"
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
