<template>
    <div  id="C" class="content">
        <div class="content-block C">
            This is Page-C
        </div>
    </div>
</template>

<script>

    module.exports = {
        data: function(){
            return {
            }
        },
        ready: function () {
            console.log("C-dom准备完毕") // -> 'foo'
        },
        methods:{
        }
    }
</script>