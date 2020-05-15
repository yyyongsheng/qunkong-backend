<template>
    <Modal
        :title="title"
        v-model="modal"
        :width="width"
        @on-ok="onOk"
        @on-cancel="onCancel"
        :closable="closable"
        :mask-closable="maskclosable"
        class-name="vertical-center-modal">
        <slot></slot>
    </Modal>
</template>

<script>
    export default{
        props: {
            togglemodal: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 120
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskclosable: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            togglemodal(val) {
                this.modal = val
            }
        },
        data() {
            return{
                modal: this.togglemodal
            }
        },
        methods: {
            onOk() {
                this.onCancel()
                this.$emit('on-ok')
            },
            onCancel() {
                this.modal = false
                this.$emit('on-cancel', this.modal)
            }
        }
    }
</script>

<style lang="scss">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>

