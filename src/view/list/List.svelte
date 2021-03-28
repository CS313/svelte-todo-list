<script>
  import Item from '../item/Item.svelte';
  import './style.css';

  export let list;
</script>

<div class="list">
  <h1 class="title">Just Do It</h1>
  <div class="inputs-wrapper">
    <input type="text" placeholder="I have to..." />
    <input type="date" />
    <button class="add-note-btn">Add Note</button>
  </div>
  <button class="clear-btn">Cleat Notes</button>
  <div>
    {#each list as item}
      <Item {item} />
    {/each}
  </div>
</div>
