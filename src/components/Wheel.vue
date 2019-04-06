<template>
  <div class="wheel-container">
    <img src="../assets/wheel-outside.png" alt="">
    <div class="wheel-content" :style="{transform:`rotate(${-deg/2}deg)`}">
      <Sector :datatype='datatype' :deg='deg' :prize='item' v-for="(item,index) in rawData" :key='index'/>
    </div>
    <Pointer :deg='deg'/>
  </div>
</template>

<script>
import Pointer from "@/components/Pointer.vue";
import Sector from "@/components/Sector.vue";
import { mapGetters } from "vuex";
export default {
  name: "Wheel",
  data() {
    return {};
  },
  props:["datatype"],
  components: {
    Pointer,
    Sector
  },
  computed: {
    ...mapGetters(["rawData"]),
    deg(){
      return 360/this.rawData.length
    }
  },
  methods: {
    getData() {
      this.$store.dispatch("getData", this.datatype);
      
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.wheel-container {
  width: 540px;
  height: 540px;
  background-color: #21278f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  padding: 18px;
  position: relative;
  img{
    position: absolute;
    top: -9px;
    left: -3px;
    z-index: 1;
  }
}
.wheel-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  border: 2px solid #000;
  overflow: hidden;
  
}
</style>
