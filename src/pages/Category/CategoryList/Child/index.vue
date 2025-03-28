<template>
  <div class="newRec">
    <div class="top">
      <img
        src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN01OWeABO2DOOnBQgbW8_!!4071218599.png"
        alt=""
      />
    </div>
    <div class="bottom">
      <img
        src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01zS03RJ2DOOn9c07qw_!!4071218599.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child'
}
</script>

<style scoped lang="scss">
.newRec {
  width: 562px;
  height: 1500px;
  //  margin-left: 188px;
  .top {
    width: 562px;
    height: 740px;
    img {
      width: 562px;
      height: 740px;
    }
  }
  .bottom {
    margin-left: 10px;
    width: 542px;
    height: 491px;
    margin-top: 50px;
    img {
      width: 542px;
      height: 491px;
    }
  }
}
</style>
