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
        <a href="/" class="text-xl uppercase">RFS Sports Meet</a>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a href="/view" class="btn variant-ghost-surface"> View </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
