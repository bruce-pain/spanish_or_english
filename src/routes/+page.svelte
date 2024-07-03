<script lang="ts">
  import Main from "$lib/components/Main.svelte";
  import YoureGay from "$lib/components/YoureGay.svelte";
  import { pageState, type state } from "$lib/stores/state";

  let currentState: state;

  pageState.subscribe((value) => {
    currentState = value;
  });
</script>

{#if currentState == "main"}
  <Main />
{:else if currentState == "gay"}
  <YoureGay />
{/if}
