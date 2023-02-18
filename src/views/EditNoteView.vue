<template>
  <div>
    <input type="text" v-model="noteName" />
    <ul>
      <li
        class="paragraph__item"
        v-for="(todo, index) in noteTodos"
        :key="index"
      >
        <input
          class="paragraph__checkbox"
          type="checkbox"
          v-model="todo.isChecked"
        />
        <input type="text" v-model="todo.name" />
      </li>
      <button @click="saveEditedNote">save</button>
      <button @click="cancelEditing">cancel</button>
      <button @click="deteleNote">X</button>
    </ul>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters } from "vuex";
import { Note } from "@/models/Note";

export default {
  data() {
    return {
      noteName: "",
      noteTodos: [],
      noteId: 0,
    };
  },
  computed: {
    ...mapGetters(["getNoteById"]),
  },
  mounted() {
    this.noteId = Number(this.$route.params.id);
    let note = this.getNoteById(this.noteId);
    this.noteName = note.name;

    // this.noteTodos = note.todos;

    this.noteTodos = structuredClone(note.todos);
  },
  methods: {
    saveEditedNote() {
      this.$store.commit(
        "saveEditedNote",
        new Note(this.noteId, this.noteName, this.noteTodos)
      );
      this.navigateToHomePage();
    },
    deteleNote() {
      this.$store.commit("deleteNote", { id: this.noteId });
      this.navigateToHomePage();
    },
    cancelEditing() {
      this.navigateToHomePage();
    },
    navigateToHomePage() {
      router.push("/");
    },
  },
};
</script>

<style></style>
