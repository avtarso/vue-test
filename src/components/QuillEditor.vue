<template>
    <div ref="editor"></div>
    <input type="text" ref="quillTextInput" />
</template>
  
<script>
  import Quill from 'quill';
  
  export default {
    name: 'QuillEditor',
    props: {
      theme: {
        type: String,
        default: 'snow',
      },
      toolbarOptions: {
        type: Array,
        default: () => [
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    },
    data() {
        return {
            quillInstance: null,
        };
    },
    mounted() {
      this.quillInstance = new Quill(this.$refs.editor, {
        theme: this.theme,
        placeholder: 'Write your comment...',
        modules: {
          toolbar: this.toolbarOptions,
        },
      });
      this.quillInstance.on('text-change', () => {
        if (!this.quillInstance) return;
        const htmlContent = this.quillInstance.root.innerHTML;
        this.$refs.quillTextInput.value = htmlContent;
      });
    },
    methods: {
        getEditorContent() {
            return this.quillInstance?.root?.innerHTML || '';
        },
        resetEditor() {
            this.quillInstance.root.innerHTML = '';
        }
    },
  };
  </script>
  
  <style scoped>
  </style>
  