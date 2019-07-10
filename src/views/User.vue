<template>
  <div class="user">
    <p>{{user}}</p>
    <p class="map-wrapper">
      <google-map :myLatLng="myLatLng" apiKey="AIzaSyAJalfCUBMNI0S7Rs6EnL0uYeqMhVmqj-U" />
    </p>
  </div>
</template>

<script>
import GoogleMapLoader from '../components/GoogleMapLoader.vue'

export default {
  components: {
    'google-map': GoogleMapLoader
  },
  name: 'User',
  data: function () {
    var user = this.$store.getters.getUser

    return {
      user: user,
      myLatLng: {
        lat: parseFloat(user.address.geo.lat),
        lng: parseFloat(user.address.geo.lng)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  text-align: center;

  .map-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
