<template>
  <Transition>
    <div class="popup-modal">
      <div class="popup__window">
        <div class="popup__content">
          <div class="popup__inner">
            <button class="popup__btn" @click="closeModal">X</button>
          </div>
          <AddNoteComponent @noteAdded="onAddNewNote" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import AddNoteComponent from "@/components/AddNoteComponent.vue";

export default {
  name: "AddNoteView",
  methods: {
    closeModal() {
      this.$emit("addNoteViewClose");
    },
    onAddNewNote() {
      this.closeModal();
    },
  },
  components: { AddNoteComponent },
};
</script>

<style lang="scss">
@import "@/assets/styles/stylesComponent/addNoteView.scss";
</style>
