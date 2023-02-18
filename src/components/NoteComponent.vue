<template>
  <div class="todo__item">
    <div class="todo__item-wrapper">
      <h3 class="todo__item-title">{{ note.name }}</h3>
      <router-link class="todo__item-link" :to="'/edit/' + note.id"
        >📝</router-link
      >
    </div>
    <ul class="todo__item-lists">
      <li
        class="todo__item-list"
        v-for="(todo, index) in note.todos"
        :key="index"
        :class="{ todo__checked: todo.isChecked }"
      >
        <input
          class="paragraph__checkbox"
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
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
