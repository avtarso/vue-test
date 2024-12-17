<template>
  <div id="app">
    <CommentsList />
    <CommentsForm />
  </div>

</template>

<script>

  import CommentsList from '@/components/CommentsList.vue';
  import CommentsForm from './components/CommentsForm.vue';

  export default {
      name: 'App',
      components: {
          CommentsList,
          CommentsForm,
      },
      data() {
          return {
            
          };
      },
      methods: {
      },
      mounted() {
      }
  };
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
