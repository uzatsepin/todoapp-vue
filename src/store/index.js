import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    getLastNoteId: (state) => {
      return state.notes[state.notes.length - 1]?.id;
    },
    getAllNotes: (state) => {
      return state.notes;
    },
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.id == id);
    },
  },
  mutations: {
    addNote(state, newNote) {
      state.notes.push(newNote);
    },
    saveEditedNote(state, editedNote) {
      let note = state.notes.find((note) => note.id == editedNote.id);

      note.name = editedNote.name;
      note.todos = editedNote.todos;
    },
    deleteNote(state, payload) {
      state.notes = state.notes.filter((note) => note.id != payload.id);
    },
  },
  actions: {},
  modules: {},
});
