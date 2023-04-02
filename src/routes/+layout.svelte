<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import "../theme.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/all.css";
  // Most of your app wide CSS should be put in this file
  import "../app.postcss";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
</script>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar background="bg-secondary-800">
      <svelte:fragment slot="lead">
        <a href="/" class="text-xl uppercase"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
            /></svg
          ></a
        >
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          href="/view"
          class="btn variant-ringed-primary hover:variant-filled-primary"
        >
          View
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
