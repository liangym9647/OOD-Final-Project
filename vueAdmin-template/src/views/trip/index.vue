<template>
  <div class="app-container">
    <el-form ref="form" label-width="120px">
      <div class="RestaurantButton"> 
          <el-row>
              <el-button type="primary" id="btn_get_rest" @click="getLocation">Get Your Location</el-button>
          </el-row>

          <!-- <GoogleMap :center="center" :home="this" :locationList="locationList" /> -->
          <!-- <GmapAutocomplete
            @place_changed='setPlace'
          /> 
          <button
            @click='addMarker'
          >
            Add
          </button>
          -->

          <GmapMap
            :center='center'
            :zoom='12'
            style='width:100%;  height: 400px;'
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in locationList"
              :position="{lat: m.lat, lng:m.lng}"
              @click="center={lat: m.lat, lng:m.lng}"
            />
          </GmapMap> 

          
          <!-- <el-input
            placeholder="Your Location"
            v-model="location"
            :disabled="true">
          </el-input> -->
      </div>
    </el-form>

    <el-table :data="locationList" style="width: 100%">
      <!-- <div v-for="(item,index) in locationList" v-bind:key="index">
          
      </div> -->

      <el-table-column
        prop = "DateTime"
        label="Date and Time"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="Location"
        label="Location"
        width="180">
      </el-table-column>
    </el-table>
    
  </div>

  
</template>


<script>
//import GoogleMap from '@/components/GoogleMap/index'
import {getAllLocationList, getGoogleLocation} from '@/api/Trip'
import axios from 'axios'
// decode time format
import {parseTime} from '@/utils'

export default {
  components: {
    //GoogleMap
  },
  data() {
    return {
      username:this.$store.getters.name,
      center: { lat: 45.508, lng: -73.587 },
      locationList: [
        {
          DateTime: '2016-05-04',
          Location: '王小虎',
          lat: 38.90813,
          lng: -77.040279, 
        }, 
        {
          DateTime: '2016-05-01',
          Location: '王小虎',
          lat: 38.8959106,
          lng: -77.0804881, 
        }, 
        {
          DateTime: '2016-05-03',
          Location: '王小虎',
          lat: 38.8546609,
          lng: -77.3358968, 
        },
        {
          DateTime: parseTime(new Date().toString()),
          Location: '王小虎',
          lat: 38.855419,
          lng: -77.0521289, 
        }
      ],
    }
  },

  created() {
    getAllLocationList().then(reponse => {
      console.log(reponse)
      this.locationList = reponse.data
    })
  },

  //show pins on google map
  mounted() {
    this.geolocate();
  },

  methods: {
    
    getLocation(){
        //解析成地址,decode to map address
        //https://maps.google.com/maps/api/geocode/json?latlng=39.910093,116.403945&language=en-US&sensor=false&key=AIzaSyC9Rfu135xnIPkdR_Yaw_w6a-NwuPfFGKY&libraries=places

        const url = `https://maps.google.com/maps/api/geocode/json?latlng=${this.center.lat},${this.center.lng}&language=en-US&sensor=false&key=AIzaSyC9Rfu135xnIPkdR_Yaw_w6a-NwuPfFGKY&libraries=places`
        
        const that = this;
        axios.get(url)
          .then(function (response) {
            const results = response.data.results
            //location list will increase a list of position information
            that.locationList.push(
              {
                DateTime: parseTime(new Date().toString()),
                Location: results[0].formatted_address,
                lat: that.center.lat,
                lng: that.center.lng, 
                
              }
            )
        });
        //this.center = {lat, lng}
        
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

</style>

