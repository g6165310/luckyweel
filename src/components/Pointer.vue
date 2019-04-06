<template>
  <div class="pointer-container">
    <img class="pointer" src="../assets/hand.svg" :style="{'transform':`rotate(${rotateDeg}deg)`}">
    <div class="press-btn" @click.prevent.capture="startWheelGame">press</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Pointer",
  data() {
    return {
      rotateDeg:0,
    };
  },
  props:['deg'],
  computed: {

  },
  methods: {
    startWheelGame() {
      let vm = this;
      vm.$store.dispatch('setResult',null)
      if(this.$store.state.totalCnt==0){
        return;
      }
      let arr = new Array(this.$store.state.totalCnt);
      let start = 0;
      this.$store.state.rawData.forEach(item => {
        if (item.total > 0) {
          arr.fill(item.index, start, start + item.total);
          start = start + item.total;
        }
      });
      let resultIndex = arr[Math.floor(Math.random() * this.$store.state.totalCnt)]
      let prize = this.$store.state.rawData[resultIndex];
      setTimeout(function(){ 
        vm.$store.dispatch('setResult',prize) 
        vm.$store.dispatch('updateTotal',{resultIndex,total:prize.total-1})
        vm.$store.dispatch('getAllCount')
      }, 1800);
      this.rotateDeg = this.rotateDeg+1440+resultIndex*this.deg-this.rotateDeg%360
    }
  },
};
</script>
<style lang="scss" scoped>
.pointer-container {
  position: absolute;
  z-index: 10;
  top: 23.5%;
  img {
    z-index: 100;
    pointer-events: none;
  }
}
.press-btn {
  position: absolute;
  text-transform: uppercase;
  background: #1f1172;
  color: #ff00ba;
  width: 110px;
  height: 110px;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  z-index: -1;
  cursor: pointer;
}
.pointer {
  transform-origin: 50% 70%;
  transition: all 2s;
}
</style>
