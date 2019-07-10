<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1>MC FE Engineer Applicant Take Home App</h1>
    <a href="/payment">Make a Payment</a>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  a {
    font-size: 26px;
  }
}
h1 {
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto;
}
</style>
