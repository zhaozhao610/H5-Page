<template>
  <div class="newRec">
    <div class="top">
      <img
        src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN017ZF05E2DOOn8hw6K4_!!4071218599.png"
        alt=""
      />
    </div>
    <div class="bottom">
      <img
        src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN010lSVyy2DOOnChFynV_!!4071218599.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Animal'
}
</script>

<style scoped lang="scss">
.newRec {
  width: 562px;
  height: 1700px;
  //  margin-left: 188px;
  .top {
    width: 562px;
    height: 380px;
    img {
      width: 562px;
      height: 380px;
    }
  }
  .bottom {
    margin-left: 10px;
    width: 542px;
    height: 1304px;
    margin-top: 50px;
    img {
      width: 542px;
      height: 1304px;
    }
  }
}
</style>
