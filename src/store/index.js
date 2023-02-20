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
      state.notes.find((note) => note.id == editedNote.id).name =
        editedNote.name;

      state.notes.find((note) => note.id == editedNote.id).todos =
        editedNote.todos;
    },
    deleteNote(state, payload) {
      state.notes = state.notes.filter((note) => note.id != payload.id);
    },
  },
  actions: {},
  modules: {},
});
