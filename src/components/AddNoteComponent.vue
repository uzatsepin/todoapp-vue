<template>
  <div>
    <input type="text" v-model="noteName" />
    <button @click="addTodo">add todo</button>
    <input
      type="text"
      v-for="(todo, index) in todoNames"
      :key="index"
      v-model="todoNames[index]"
    />
    <button @click="saveNote">save note</button>
  </div>
</template>

<script>
import { Note } from "@/models/Note";
import { TodoItem } from "@/models/TodoItem";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      noteName: "",
      todoNames: [],
    };
  },
  computed: {
    ...mapGetters(["getLastNoteId"]),
  },
  methods: {
    addTodo() {
      this.todoNames.push(this.todoName);
    },
    saveNote() {
      let lastNoteId = this.getLastNoteId == undefined ? 0 : this.getLastNoteId;
      const todos = this.todoNames.map(
        (todoName) => new TodoItem(todoName, false)
      );
      const note = new Note(++lastNoteId, this.noteName, todos);
      this.$store.commit("addNote", note);
      this.$emit("noteAdded");
    },
  },
};
</script>

<style></style>
