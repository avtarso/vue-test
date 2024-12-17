<template>
    <div>
        <form id="commentForm" @submit.prevent="submitComment">
            <input type="text" id="commentUser_name" v-model="form.user_name" placeholder="User name (required)" required><br />
            <input type="email" id="commentE_mail" v-model="form.e_mail" placeholder="E-mail (required)" required><br />
            <input type="text" id="commentHome_page" v-model="form.home_page" placeholder="Home page (optional)"><br />
            <QuillEditor 
                ref="quillEditor"
                :toolbar-options="[['bold', 'italic', 'code', 'link']]" 
                />
            <GetCaptcha ref="getCaptcha" />
            <button type="submit">Add Comment</button>
        </form>
    </div>
</template>

<script>
    import QuillEditor from './QuillEditor.vue';
    import GetCaptcha from './Captcha.vue';
    import axios from '../axiosConfig';

    export default {
        name: 'CommentsForm',
        components: {
            QuillEditor,
            GetCaptcha,
        },
        data() {
            return {
                form: { 
                    user_name: '', 
                    e_mail: '', 
                    home_page: '', 
                    text: '', 
                    captcha_key: '',  
                    captcha_value: '',
                },
            };
        },
        methods: {
            async submitComment() {
                try {
                    this.form.text = this.$refs.quillEditor.getEditorContent();
                    this.form.captcha_key = this.$refs.getCaptcha.getCaptchaKey();
                    this.form.captcha_value = this.$refs.getCaptcha.getCaptchaValue();

                    if (!this.form.text || this.form.text === '<p><br></p>') {
                        alert('Комментарий не может быть пустым.');
                        return;
                    }

                    if (!this.form.captcha_value) {
                        alert('Введите капчу.');
                        return;
                    }

                    const API_URL = window.location.protocol === 'https:'
                        ? 'https://spa.up.railway.app/api/comments/'
                        : 'http://localhost:8000/api/comments/';

                    const response = await axios.post(API_URL, this.form);

                    console.log('Комментарий отправлен:', response.data);
                    alert('Комментарий успешно отправлен!');
                    
                    this.form.user_name = '';
                    this.form.e_mail = '';
                    this.form.home_page = '';

                    if (this.$refs.quillEditor) {
                        this.$refs.quillEditor.resetEditor();
                    }
                    if (this.$refs.getCaptcha) {
                        this.$refs.getCaptcha.resetCaptcha();
                    }

                } catch (error) {
                    console.error('Ошибка при отправке комментария:', error.response.data);
                    alert('Не удалось отправить комментарий!');
                }
            }

        },
    };
</script>
  
<style>
</style>
  