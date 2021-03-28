<script>
  import { notes } from './store';
  import List from './view/list/List.svelte';
  import './index.css';

  let list;
  let newNote = {};

  notes.subscribe((value) => (list = value));

  const handleChange = (name, value) =>
    (newNote = { ...newNote, [name]: value, id: Math.random() });

  const addNote = () => notes.update((prevNotes) => [...prevNotes, newNote]);

  const clearAllNotes = () => notes.set([]);

  const deleteNote = (id) =>
    notes.update((prevNotes) => prevNotes.filter((el) => el.id !== id));
</script>

<main>
  <List {list} {handleChange} {addNote} {clearAllNotes} {deleteNote} />
</main>
