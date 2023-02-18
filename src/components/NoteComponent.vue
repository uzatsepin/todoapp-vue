<template>
  <div>
    <h3>{{ note.name }}</h3>
    <router-link :to="'/edit/' + note.id">edit</router-link>
    <ul>
      <li
        class="paragraph__item"
        v-for="(todo, index) in note.todos"
        :key="index"
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

<style>
.paragraph__item {
  display: flex;
  justify-content: center;
}
</style>
