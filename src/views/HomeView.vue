<template>
  <div class="home">
    <button @click="openModal">Add Note</button>
    <div>
      <NoteComponent v-for="note in getAllNotes" :key="note?.id" :note="note" />
    </div>
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
    addNote() {},
    openModal() {
      this.isModalViewVisible = true;
    },
    onAddNoteViewClose() {
      this.isModalViewVisible = false;
    },
  },
};
</script>
