<script>
  import Item from '../item/Item.svelte';
  import './style.css';

  export let list;
  export let handleChange;
  export let addNote;
  export let clearAllNotes;
  export let deleteNote;
</script>

<div class="list">
  <h1 class="title">Just Do It</h1>
  <div class="inputs-wrapper">
    <input
      type="text"
      placeholder="I have to..."
      on:input={(e) => handleChange('note', e.target.value)}
    />
    <input type="date" on:input={(e) => handleChange('time', e.target.value)} />
    <button class="add-note-btn" on:click={addNote}>Add Note</button>
  </div>
  <button class="clear-btn" on:click={clearAllNotes}>Cleat Notes</button>
  <div>
    {#each list as item}
      <Item {item} {deleteNote} />
    {/each}
  </div>
</div>
