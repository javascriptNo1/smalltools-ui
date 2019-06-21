<template>
    <div class="numbox">
      <span @click="reduce">-</span>
      <input
        :class="disabled?'disabled':''"
        type="text"
        @blur="setdefault"
        :disabled="disabled"
        v-model="this_num">
      <span @click="add">+</span>
    </div>
</template>

<script>
    export default {
      name: "st-num",
      data() {
        return {
          this_num:Number(this.value)
        }
      },
      methods:{
        add(){
          if (this.max === 'none'){
            this.this_num++
          }
          else if (this.this_num<this.max) {
            this.this_num++
          }
        },
        reduce(){
          if (this.min === 'none'){
            this.this_num--
          }
          else if (this.this_num>this.min) {
            this.this_num--
          }
        },
        setdefault(){
          if (this.this_num === ''){
            this.this_num = 1
          }
        }
      },
      props: {
        value: {
          type: Number,
          default:1
        },
        min:{
          default:"none"
        },
        max:{
          default:"none"
        },
        disabled:{
          type:Boolean,
          default:false
        }
      },
      watch: {
        this_num(val) {
           if (!isNaN(Number(val)) || (val === '-')){
             if (Number(val)<this.min && val !== '')  {
               this.this_num = this.min
             }
             if (Number(val)>this.max && val !== '')  {
               this.this_num = this.max
             }
             this.$emit('input', Number(val));
             this.$emit('change', Number(this.this_num));
          }
          else {
            this.this_num = 1
          }
        }
      },
    }
</script>

<style scoped lang="less">
  .numbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    input{
      width: 50%;
      text-align: center;
      &.disabled{
        background: #fff;
      }
    }
    span{
      width: 20px;
      height: 20px;
      display: inline-block;
      line-height: 20px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      border: 1px solid #DCDFE6;
      border-radius: 50%;
    }
  }
</style>
