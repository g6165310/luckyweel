<template>
  <div class="result-container" v-if="result">
    <span>
      WELL
      <br>DONE!
    </span>
    <div class="result">
      <span>YOU GET A FREE...</span>
      <div class="result-text">{{result.text}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Result",
  data() {
    return {};
  },
  props: [],
  computed: {
    ...mapGetters(["result"])
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.result-container {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 237px;
  background-color: #343baa;
  background-image: url("../assets/result-bg.jpg");
  background-position: 50%;
  background-blend-mode: overlay ;
  
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 72px;
    color: #ffffff;
    font-weight: 700;
    margin-right: 600px;
  }
  .result {
    span {
      margin-right: 0;
      font-size: 32px;
    }
  }
  .result-text {
    font-size: 72px;
    font-weight: 700;
    text-decoration: underline;
    color: #ff00ba;
  }
  .container-bg {
    position: absolute;
  }
}
</style>
