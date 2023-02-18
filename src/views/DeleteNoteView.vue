<template>
  <Transition>
    <div class="popup-modal">
      <div class="popup__window">
        <div class="popup__content">
          <div class="popup__inner">
            <button class="popup__btn" @click="closeModal">X</button>
          </div>
          <h3 class="popup__title">Ви впевнені, що хочете видалити нотатку?</h3>
          <div class="popup__btns">
            <button class="btn" @click="confirmDelete">Так</button>
            <button class="btn-cancel" @click="closeModal">Ні</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "DeleteNoteView",
  props: {
    isModalViewVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    confirmDelete() {
      this.$emit("confirmDelete");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/stylesComponent/addNoteView.scss";
</style>
