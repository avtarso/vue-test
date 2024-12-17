<template>
    <img ref="captchaImage" alt="Captcha" />
    <button @click="loadCaptcha">Refresh</button>
    <input 
        type="text" 
        v-model="captchaInput"  
        placeholder="Enter captcha (required)" 
        required 
    />
    <br />
</template>

<script>
    export default {
        name: 'GetCaptcha',
        data() {
            return {
                captchaUrl: '',
                captchaKey: '',
                captchaInput: '',
            };
        },
        methods: {
            async loadCaptcha() {
                try {

                    const API_URL = window.location.protocol === 'https:'
                        ? 'https://spa.up.railway.app/api/get-captcha/'
                        : 'http://localhost:8000/api/get-captcha/';

                    const response = await fetch(API_URL);
                    if (!response.ok) throw new Error('Ошибка при загрузке капчи');

                    this.captchaKey = response.headers.get('Captcha-Key') || '';
                    const blob = await response.blob();

                    const captchaUrl = URL.createObjectURL(blob);
                    if (this.$refs.captchaImage) {
                        this.$refs.captchaImage.src = captchaUrl;
                    }
                    this.captchaInput = '';
                } catch (error) {
                    console.error('Ошибка при загрузке капчи:', error);
                    alert('Ошибка при загрузке капчи. Попробуйте снова.');
                }
            },
            getCaptchaValue() {
                return this.captchaInput;
            },
            getCaptchaKey() {
                return this.captchaKey;
            },
            resetCaptcha() {
                this.captchaInput = '';
                this.loadCaptcha();
            },
        },
        mounted() {
            this.loadCaptcha();
        },
    };
</script>

<style scoped>
</style>
