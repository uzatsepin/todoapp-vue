<template>
  <form @submit="saveNote">
    <div class="addNote">
      <div class="addNote__name">
        <label class="addNote__name-label" for="name">Назва нотатки:</label>
        <input
          class="addNote__name-input"
          id="name"
          type="text"
          v-model="noteName"
          placeholder="Назва завдання..."
          autocomplete="off"
          required
        />
      </div>
      <div class="addNote__inputs">
        <label
          class="addNote__input-label"
          v-if="todoNames.length >= 1"
          for="task"
          >Що зробити? (todo)</label
        >
        <input
          id="task"
          type="text"
          v-for="(todo, index) in todoNames"
          :key="index"
          v-model="todoNames[index]"
          required
          placeholder="Опис..."
        />
        <button class="btn btn-add" @click="addTodo">Додати задачу</button>
        <button class="btn" v-if="todoNames.length >= 1" type="submit">
          Зберегти
        </button>
      </div>
    </div>
  </form>
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
