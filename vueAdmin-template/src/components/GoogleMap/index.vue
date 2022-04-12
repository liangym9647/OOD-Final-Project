<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker($event)'
      >
        Add
      </button>
    </div>
    <br>

    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      /> -->

      <GmapMarker
        :key="index"
        v-for="(m, index) in locations"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props:['center', 'home', 'locationList'],
  data() {
    return {
      center: this.home.center,
      locations: this.locationList,

      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  // mounted() {
  //   console.log(this.newCenter)
  // },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },

    addMarker(e) {
      e.preventDefault();
      console.log(this.currentPlace)

      console.log(this.currentPlace.geometry.location.lat())
      console.log(this.currentPlace.geometry.location.lng())

      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.currentPlace = null;
      }
    },

    
  },
}
</script>

