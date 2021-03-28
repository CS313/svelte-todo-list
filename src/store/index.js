import { writable } from 'svelte/store';

export const notes = writable([
  { note: 'Testing', time: '2021-03-19', id: 'test' },
  { note: 'Testing', time: '2021-10-21', id: 'test' },
  { note: 'Testing', time: '2020-12-21', id: 'test' },
]);
