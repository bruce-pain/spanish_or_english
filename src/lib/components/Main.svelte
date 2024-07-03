<script lang="ts">
  import { pageState } from "$lib/stores/state";
</script>

<p class="prompt">Pick a language</p>
<div class="container">
  <button on:click={() => pageState.set("gay")} class="english">english</button>
  <button on:click={() => pageState.set("gay")} class="spanish">spanish</button>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
  }

  .prompt {
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
  }

  button {
    font-size: 5rem;
    text-transform: uppercase;
    padding: 40px;
    background-color: #142631;
    color: #e7e5e7;
  }

  @media (max-width: 760px) {
    .prompt {
      font-size: 3rem;
    }

    button {
      font-size: 3rem;
    }
  }

  /* .english {
    background-color: #142631;
  }

  .spanish {
    background-color: yellow;
  } */
</style>
