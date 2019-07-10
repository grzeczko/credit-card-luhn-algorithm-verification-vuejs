<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    myLatLng: Object,
    apiKey: String,
  },

  data() {
    return {
      google: null,
      map: null
    }
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      console.log(this.myLatLng)
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, {
          center: this.myLatLng,
          zoom: 8
        }
      )

      this.marker = new google.maps.Marker({
        position: this.myLatLng,
        map: this.map,
        title: 'Hello MasterCard!'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.google-map {
  width: 30vw;
  height: 30vh;
}
</style>
