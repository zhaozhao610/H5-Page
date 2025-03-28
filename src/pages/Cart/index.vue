<template>
   <div class="cart" >
       <div class="top" >
            <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01ORN5L52DOOnAmu567_!!4071218599.png" alt="">
	   </div>
	   <div class="center" >
             <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01ezWJEp2DOOnAas13J_!!4071218599.png" alt="">
			 <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01ezWJEp2DOOnAas13J_!!4071218599.png" alt="">
	   </div>
	   <div class="bottom">
            <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01hvb5o32DOOnEOJhEU_!!4071218599.png" alt="">
	   </div>
   </div>
</template>

<script>
export default {
    name: 'Cart'
}
</script>

<style scoped lang="scss">
	.cart{
		width:750px;
		.top{
            width: 750px;
            height: 200px;
            img{
                width: 750px;
                height: 200px;
            }
        }
		.center{
            width: 750px;
            img{
                margin-left:25px;
                width: 700px;
                height: 293px;
            }
        }
		.bottom{
            width: 750px;
            height: 84px;
			margin-top: 430px;
            img{
                margin-left:18px;
                width: 714px;
                height: 84px;
            }
        }
	}
</style>