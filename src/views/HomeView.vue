<template>
  <div class="todo">
    <h1 class="todo__title">ToDo App 📄</h1>
    <div class="todo__descr" v-if="getAllNotes.length === 0">
      Наразі, ще нічого не додано. Натисніть кнопку "Додати нотатку", для того,
      щоб додати нотатку з нагадуваннями
    </div>
    <div class="todo__items">
      <NoteComponent
        v-for="note in getAllNotes"
        :key="note?.id"
        :note="note"
        :isModalViewVisible="isModalViewVisible"
        @confirmDelete="onConfirmDelete"
      />
    </div>
    <button class="todo__btn btn" @click="openModal">Додатки нотатку</button>

    <AddNoteView
      v-if="isModalViewVisible"
      @addNoteViewClose="onAddNoteViewClose"
    />
  </div>
</template>

<script>
import NoteComponent from "@/components/NoteComponent.vue";
import AddNoteView from "./AddNoteView.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isModalViewVisible: false,
    };
  },
  name: "HomeView",
  components: {
    NoteComponent,
    AddNoteView,
  },
  computed: {
    ...mapGetters(["getAllNotes"]),
  },
  methods: {
    openModal() {
      this.isModalViewVisible = true;
    },
    onAddNoteViewClose() {
      this.isModalViewVisible = false;
    },
  },
};
</script>

<style lang="scss"></style>
