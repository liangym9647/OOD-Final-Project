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
              :position="{lat: parseFloat(m.lat), lng: parseFloat(m.lng)}"
              @click="center={lat: parseFloat(m.lat), lng:parseFloat(m.lng)}"
            />
          </GmapMap> 

      </div>
    </el-form>

    <el-table :data="locationList" style="width: 100%">
     
          <el-table-column
            prop="dateTime"
            label="DateTime"
            width="180">
          </el-table-column>
          
          <el-table-column
            prop="location"
            label="Location"
            width="180">
          </el-table-column>
    </el-table>
  </div>

  
</template>


<script>
//import GoogleMap from '@/components/GoogleMap/index'
import {getAllLocationList, addATrip} from '@/api/Trip'
import axios from 'axios'
// decode time format
import {parseTime} from '@/utils'

export default {
  components: {
    //GoogleMap
  },
  data() {
    return {
      username: 'Eric',
      center: { lat: 45.508, lng: -73.587 },
      locationList: [
        // {
        //   DateTime: '2022-04-10 10:44:39',
        //   Location: '2982 Gallows Rd, Falls Church, VA 22042, USA',
        //   lat: 38.90813,
        //   lng: -77.040279, 
        // }, 
        // {
        //   DateTime: '2022-04-11 14:02:32',
        //   Location: '1800 N Quinn St, Arlington, VA 22209, USA',
        //   lat: 38.8959106,
        //   lng: -77.0804881, 
        // }, 
        // {
        //   DateTime: '2022-04-11 20:05:21',
        //   Location: '1515 Richmond Hwy, Arlington, VA 22202, USA',
        //   lat: 38.8546609,
        //   lng: -77.3358968, 
        // },
        // {
        //   DateTime:'2022-04-12 10:05:21',
        //   Location: 'Nitze Building, 1740 Massachusetts Ave NW, Washington, DC 20036, USA',
        //   lat: 38.855419,
        //   lng: -77.0521289, 
        // }
      ],
    }
  },

  created() {
    getAllLocationList().then(reponse => {
      console.log(reponse.data)
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
            console.log(parseTime(new Date().toString()))
            console.log(results[0].formatted_address)
            const newLocation = {
                userName: 'Eric',
                dateTime: parseTime(new Date().toString()),
                location: results[0].formatted_address,
                lat: that.center.lat.toString(),
                lng: that.center.lng.toString(), 
              }

            addATrip(newLocation).then(response => {
              console.log(response.data)
            })

            that.locationList.push(newLocation)
        });

        //


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

