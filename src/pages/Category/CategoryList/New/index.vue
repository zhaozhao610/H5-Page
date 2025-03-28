<template>
  <div class="newRec">
    <div class="top">
      <img
        src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01H5PtU72DOOnB1sVSe_!!4071218599.png"
        alt=""
      />
    </div>
    <div class="bottom">
      <img
        src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN01xzqeYs2DOOnChEhlG_!!4071218599.png"
        alt=""
        width="542px"
        height="256px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'New'
}
</script>

<style scoped lang="scss">
.newRec {
  width: 562px;
  height: 1000px;
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
    height: 256px;
    margin-top: 50px;
    img {
      width: 542px;
      height: 256px;
    }
  }
}
</style>
