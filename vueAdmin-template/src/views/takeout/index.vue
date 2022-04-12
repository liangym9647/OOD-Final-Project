<template>
  <div class="app-container">
    <div class="RestaurantButton"> 
        <div>
          <h2>Search Restaurant Nearby your Location</h2>

        </div>

        <el-row style="margin-bottom:10px">
          <el-col :span="4">
              <GmapAutocomplete id="inputArea" placeholder="Input a location"
                @place_changed='setLocation'
                
              />
          </el-col>

          <el-col :span="8">
            <el-button type="primary"
              @click='searchRestaurant($event)'
            >
              Search
            </el-button>
          </el-col>
        </el-row>

        

        <GmapMap
          :center='center'
          :zoom='12'
          style='width:100%;  height: 400px;'
        >
           <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="{lat: m.location.lat, lng:m.location.lng}"
            @click="center={lat: m.location.lat, lng:m.location.lng}"
          />
        </GmapMap>

    </div>

    <el-table
      :data="restaurantData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Restaurant Name"
        width="240">
      </el-table-column>

      <el-table-column
        prop="user_ratings_total"
        label="RatingPeople"
        width="180">
      </el-table-column>

      <el-table-column
        prop="rating"
        label="Rating"
        width="180">
      </el-table-column>


      <el-table-column
        prop="vicinity"
        label="Vicinity">
      </el-table-column>

      <!-- <el-table-column
        prop='open_hours.open_now'
        label="is Open">
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      currentPlace: null,
      center: { lat: 45.508, lng: -73.587 },
      type:"restaurant",
      markers:[],
      restaurantData:[
        {
          place_id: "ChIJpXE-BEgayUwRCcfDkNZLQnk",
          name: "Lola Rosa Café",
          user_ratings_total: 1439,
          rating: 4.5,
          vicinity: "545 Rue Milton, Montréal",
          open: 'Yes'
          // opening_hours:{
          //   open_now: true
          // }
        }
      ],
    }
  },
  mounted() {
    this.geolocate();
    this.getRestaurants();
  },
  methods: {
    setLocation(place) {
      this.currentPlace = place
      this.center = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng(),
      };
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(this.center)
      });
    },

    getRestaurants: function() {
      const googleApi = {
        key: "AIzaSyC9Rfu135xnIPkdR_Yaw_w6a-NwuPfFGKY",
        libraries:"places"
      }

      const params = {
        location: `${this.center.lat},${this.center.lng}`,
        language: 'en-US',
        radius: 1000,
        type: this.type,
        key: googleApi.key,
        libraries: googleApi.libraries
      }

      const that = this

      axios.get(`/google/maps/api/place/nearbysearch/json`, {params: params}).then(response => {
        console.log(response.data.results)

        const res = response.data.results;
        res.forEach(element => {
          const mark = element.geometry
          console.log(mark.location.lng)
          this.markers.push(mark)
        });
        that.restaurantData = res
      })
    },

    searchRestaurant(event) {

      console.log("search")
      event.preventDefault();
      this.getRestaurants()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

#btn_get_rest{
    margin-bottom: 10px;
}

#inputArea{
  -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

</style>

