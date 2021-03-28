import { writable } from 'svelte/store';

export const notes = writable([
  { note: 'Eat', time: '2021-03-19', id: Math.random() },
  { note: 'Pray', time: '2021-10-21', id: Math.random() },
  { note: 'Love', time: '2020-12-21', id: Math.random() },
]);
