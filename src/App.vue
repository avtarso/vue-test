<template>

<h1>Comments</h1>
    <ul id="comments"></ul>
    <form id="commentForm">
        {% csrf_token %}
        <input type="text" id="commentUser_name" placeholder="User name (required)" required><br />
        <input type="text" id="commentE_mail" placeholder="E-mail (required)" required><br />
        <input type="text" id="commentHome_page" placeholder="Home page (optional)"><br />
        {% comment %} <input type="text" id="commentText" placeholder="Comment Text (required)" required><br /> {% endcomment %}
        <div id="commentTextEditor"></div>
        <input type="hidden" id="commentText" name="commentText">

        <img id="captchaImage" src="" alt="Captcha" />
        <button type="button" id="refreshCaptcha">Refresh Captcha</button>
        <br />
        <input type="text" id="captchaAnswer" placeholder="Enter captcha (required)" required><br />
        <input type="hidden" id="captchaKey">

        <button type="submit">Add Comment</button>
    </form>
    <br />
    <br />
    <a href="http://127.0.0.1:8000/">localhost</a>
    --<a href="https://spa.up.railway.app/">hosting main</a>
    --<a href="https://harmonious-rebirth-production.up.railway.app/">hosting branch</a>
    <br />
    <br />
    <a href="https://github.com/avtarso/spa_comments_app">github.com</a> 

</template>

<script setup lang="ts">
export default {
  name: 'App',
  data () {
      return: 'title'
  }
}
</script>

<style scoped>

</style>
