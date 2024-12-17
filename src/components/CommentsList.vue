<template>
    <div>
      <h2>Комментарии</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.user_name }}</strong>
          <small>{{ formatDate(comment.created_at) }}</small>
          <p v-html="comment.text"></p>
          <div>
            <button @click="likeComment(comment.id)">👍</button>
            <span :id="'likes-count-' + comment.id">{{ comment.likes }}</span>
            <button @click="dislikeComment(comment.id)">👎</button>
            <span :id="'dislikes-count-' + comment.id">{{ comment.dislikes }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>
  
<script>
    import commentsApi from '@/api/comments.js';
    
    export default {
        name: 'CommentsList',
        data() {
            return {
                comments: [],      
                errorMessage: null 
            };
        },
        methods: {
            async loadComments() {
                try {
                this.errorMessage = null; 
                this.comments = await commentsApi.fetchComments();
                } catch (error) {
                this.errorMessage = 'Не удалось загрузить комментарии';
                }
            },
            formatDate(dateString) {
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
                return new Date(dateString).toLocaleDateString('ru-RU', options);
            },

            likeComment(commentId) {
                const comment = this.comments.find(c => c.id === commentId);
                if (comment) {
                    comment.likes += 1;
                }
            },
            dislikeComment(commentId) {
                const comment = this.comments.find(c => c.id === commentId);
                if (comment) {
                    comment.dislikes += 1;
                }
            }
        },
        mounted() {
            this.loadComments(); 
        }
    };
</script>
  
<style scoped>
.error {
    color: red;
    font-weight: bold;
}
</style>
  