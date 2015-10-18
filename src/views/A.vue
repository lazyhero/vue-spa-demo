<style>
</style>

<template>
    <div id="A" class="content">
        This is Page-A

    </div>
</template>

<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        ready: function () {
            console.log("A-dom准备完毕") // -> 'foo'
        }
    }
</script>
