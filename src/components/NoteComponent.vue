<template>
  <div class="todo__item">
    <div class="todo__item-wrapper">
      <h3 class="todo__item-title">{{ note.name }}</h3>
      <router-link class="todo__item-link" :to="'/edit/' + note.id"
        >📝</router-link
      >
      <button class="btn-delete" @click="this.isModalViewVisible = true">
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
      <DeleteNoteView
        v-if="isModalViewVisible"
        :isModalViewVisible="isModalViewVisible"
        @closeModal="onClickCloseModal"
        @confirmDelete="onDeleteNote"
      />
    </div>
    <ul class="todo__item-lists">
      <li
        class="todo__item-list"
        v-for="(todo, index) in note.todos"
        :key="index"
        :class="{ todo__checked: todo.isChecked }"
      >
        <input
          class="checkbox"
          type="checkbox"
          v-model="todo.isChecked"
          disabled
        />
        <p>{{ todo.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import DeleteNoteView from "@/views/DeleteNoteView.vue";

export default {
  data() {
    return {
      isModalViewVisible: false,
    };
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  components: { DeleteNoteView },
  methods: {
    onDeleteNote() {
      this.$store.commit("deleteNote", { id: this.note.id });
    },
    confirmDelete() {
      this.$emit("confirmDelete");
    },
    onClickCloseModal() {
      this.isModalViewVisible = false;
    },
  },
};
</script>

<style></style>
