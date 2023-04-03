<script lang="ts">
  import { FileDropzone } from "@skeletonlabs/skeleton";
  let files: FileList;
  $: name = "Upload a file or drag and drop";
  function onChangeHandler(e: Event): void {
    name = (e.target as HTMLInputElement)?.files?.item(0)?.name ?? name;
  }
  function handleSubmit(e: SubmitEvent): void {
    if (!e.target) return;
    const formData = new FormData(e.target as HTMLFormElement);
    fetch("https://api.rfs-sports.kush.in/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => alert(err.message));
  }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-10 text-center">
    <h2 class="font-bold">Upload Photos Here</h2>
    <form on:submit|preventDefault={handleSubmit} enctype="multipart/form-data">
      <FileDropzone
        on:change={onChangeHandler}
        class="text-xl mb-8"
        accept="image/*"
        name="files"
      >
        <svelte:fragment slot="lead">
          <svg
            class="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14.8 15H13v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.19.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z"
            /></svg
          >
        </svelte:fragment>
        <svelte:fragment slot="message">
          {name}
        </svelte:fragment>
        <svelte:fragment slot="meta">PNG and JPG allowed</svelte:fragment>
      </FileDropzone>
      <label class="label my-4">
        <span>Event</span>
        <input
          name="event"
          class="input"
          type="text"
          placeholder="Name of the event"
        />
      </label>
      <input
        class="btn variant-filled-primary cursor-pointer text-2xl"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
</div>
