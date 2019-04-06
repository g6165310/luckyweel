<template>
  <div
    class="sector-container"
    :style="{transform:`rotate(${deg*prize.index}deg) skewY(-${90-deg}deg)`}"
    :class="{active:  result&&result.index==prize.index }"
  >
    <div
      class="sector-content"
      :style="{transform:transformStyle}"
    >
      <i class="material-icons">{{prize.icon}}</i>
      <div class="sector-text">{{prize.text}}</div>
      <span>({{prize.total}})</span>
    </div>
    <div class="sector-decoration">
      <span></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Sector",
  props: ["prize", "deg","datatype"],
  methods: {},
  computed: {
    ...mapGetters(["result"]),
    transformStyle(){
      return this.datatype===2017?`skewY(${90-this.deg}deg) rotate(${this.deg/2}deg) translate(8px,-75px)`:`skewY(${90-this.deg}deg) rotate(${this.deg/2}deg) translate(-5px,-130px)`
    }
  },
  mounted() {},
  created() {}
};
</script>

<style scoped lang="scss">
.sector-container {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0% 100%;
  background: #343baa;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  &:nth-child(odd) {
    background: #f0beff;
    i,span {
      color: #343baa;
    }
    
    .sector-text {
      color: #343baa;
    }
  }
  &.active {
    background: #ff00ba;

    i,span,
    .sector-text {
      color: #fff;
    }
  }
  transition: all 0.2;
}
.sector-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  span {
    position: absolute;
    top: -23px;
    display: block;
    background-color: #ff00ba;
    border: 2px solid #000;
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      right: -5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid #000;
    }
  }
}
.sector-content {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i {
    font-size: 72px;
    color: #f0beff;
  }
  span{
    color: #f0beff;
  }
}
.sector-text {
  position: relative;
  font-size: 32px;
  text-align: center;
  height: 100%;
  width: 100%;
  font-weight: 700;
  color: #f0beff;
}
</style>