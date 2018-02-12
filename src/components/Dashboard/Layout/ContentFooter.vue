<template>
      <div class="back">
        <div class="digital-wallet">Digital wallet</div>
        <div class="bitmap">
          <img src="static/img/bitmap.png">
        </div>
        <div class="button-wrap">
        <button class="button">BUY BITCOIN</button>
      </div>
      </div>
</template>
<script>
  export default {}

</script>
<style>
  .back {
    width: 90%;
    background-color: #171717;
    margin: 2em auto;
    height: 180px;
  }
  .bitmap {
    margin: 0 auto;
    padding: 1em;
    float: right;
    width: 33.33%;
  }

  .digital-wallet {
    position: absolute;
    color: #ffffff;
    font-size: 58px;
    font-weight: 400;
    padding: 0.72em;
    width: 33.33%;
  }

  .button-wrap{
    float: right;
    padding: 6em;
    width: 33.33%;
  }

  .button {
    background-color: #fff;
    border: none;
    color: #171717;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    width: 219px;
    height: 60px;
    font-size: 23px;
    font-weight: 700;
  }


</style>
