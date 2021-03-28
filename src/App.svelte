<script>
  import { notes } from './store';
  import List from './view/list/List.svelte';

  let list;

  notes.subscribe((value) => (list = value));
</script>

<main>
  <List {list} />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
</style>
