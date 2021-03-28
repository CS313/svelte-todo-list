<script>
  import moment from 'moment';
  import './style.css';

  export let item;
  export let deleteNote;
</script>

<div class="list-item">
  <div class="list-item-content">
    <p>{item.note}</p>
    <div><em><small>{moment(new Date(item.time)).fromNow()}</small></em></div>
  </div>
  <div class="delete-btn" on:click={() => deleteNote(item.id)}>&#x2715;</div>
</div>
