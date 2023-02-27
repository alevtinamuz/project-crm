<template>
<div class="wrapper-bp">
    <div class="BookPage">
        <div class="BookPage-header">
            <span>
                <i 
                class="material-icons text-black"
                @click="closeBookPage"
                >close
                </i>
            </span>
        </div>
        <div class="BookPage-content">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "BookPage",
    props: {},
    data() {
        return {}
    },
    methods: {
        closeBookPage() {
            this.$emit('closeBookPage')
        }
    }
}

</script>

<style lang="scss">

.wrapper-bp {
    background: rgba(64, 64, 64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex-flow: column nowrap;
}
.BookPage {
    padding: 40px;
    position: fixed;
    top: 100px;
    width: 700px;
    height: 500px;
    background: #fff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 99;
    &-header, &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>