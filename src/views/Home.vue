<template>
  <div class="container">
    <Wheel :datatype="type"/>
    <Result/>
    <div class="btn-container">
      <div class="btn" @click="changeData(2017)" :class="{isActive:type===2017}">2017</div>
      <div class="btn" @click="changeData(2018)" :class="{isActive:type===2018}">2018</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Wheel from "@/components/Wheel.vue";
import Result from "@/components/Result";
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      type: 2017
    };
  },
  components: {
    Wheel,
    Result
  },
  computed: {
    ...mapGetters(["rawData"])
  },
  methods: {
    changeData(val) {
      if (this.type != val) {
        this.type = val;
        this.$store.dispatch("getData", this.type);
        this.$store.dispatch("setResult", null);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.btn-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  border: 2px solid #000;
  margin-top: 48px;
  margin-left: 24px;
}
.btn {
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #1f1172;
  color: #fff;
  cursor: pointer;
  &:nth-child(1) {
    border-right: 2px solid #000;
  }
  &.isActive {
    background-color: #ff00ba;
  }
}
</style>