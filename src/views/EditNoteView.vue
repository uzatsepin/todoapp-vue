<template>
  <div class="edit">
    <div class="edit__descr">
      <h2 class="edit__title">Ви перейшли на сторінку редагування нотатки</h2>
      <p class="edit__descr">
        Тут ви можете змінити назву нотатки, змінити завдання, відмитити його
        виконаним чи видалили
      </p>
    </div>
    <div class="edit__content">
      <div class="edit__name">
        <label class="edit__label" for="name">Назва нотатки:</label>
        <input name="name" type="text" v-model="noteName" />
      </div>
      <ul class="edit__list">
        <li
          class="edit__list-item"
          v-for="(todo, index) in noteTodos"
          :key="index"
        >
          <input class="checkbox" type="checkbox" v-model="todo.isChecked" />
          <input class="edit__list-input" type="text" v-model="todo.name" />
          <button class="btn-delete" @click="deleteTodo(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </li>
        <div class="edit__btns">
          <button class="btn" @click="saveEditedNote">Зберегти</button>
          <button class="btn" @click="addTodo">Додати</button>
          <button class="btn-cancel" @click="cancelEditing">Відмінити</button>
          <button class="btn-cancel" @click="confirmDelete">Видалити</button>
        </div>
        <DeleteNoteView
          v-if="isModalViewVisible"
          :isModalViewVisible="isModalViewVisible"
          @closeModal="onClickCloseModal"
          @confirmDelete="onDeleteNote"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters } from "vuex";
import { Note } from "@/models/Note";
import DeleteNoteView from "./DeleteNoteView.vue";
import { TodoItem } from "@/models/TodoItem";

export default {
  data() {
    return {
      isModalViewVisible: false,
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
    addTodo() {
      this.noteTodos.push(new TodoItem("", false));
    },
    deleteTodo(index) {
      this.noteTodos.splice(index, 1);
    },
    onDeleteNote() {
      this.$store.commit("deleteNote", { id: this.noteId });
      this.navigateToHomePage();
    },
    cancelEditing() {
      this.navigateToHomePage();
    },
    confirmDelete() {
      this.isModalViewVisible = true;
    },
    onClickCloseModal() {
      this.isModalViewVisible = false;
    },
    navigateToHomePage() {
      router.push("/");
    },
  },
  components: { DeleteNoteView },
};
</script>

<style></style>
