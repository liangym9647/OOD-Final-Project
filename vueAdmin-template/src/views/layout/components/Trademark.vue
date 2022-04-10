<template>
  <footer class='trademark'>
    Copyright © 2088-2099 XX技术有限公司
  </footer>
</template>
<script>
export default {
  name: 'trademark'
}
</script>
<style rel='styleSheet/scss' lang='scss' scoped>
@import 'src/styles/color.scss';
  .trademark {
    font-size: 12px;
    padding: 10px 0;
    border-top: 1px solid $dividingLine;
    color: $silver;
    line-height: 20px;
    text-align: center;
  }
</style>