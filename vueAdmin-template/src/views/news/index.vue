<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Friends:">

        <el-select v-model="form.friends" placeholder="please select your friend">
          <el-option label="Bo Liu" value="Bo Liu"></el-option>
          <el-option label="Qiaozhu Qiang" value="Qiaozhu Qiang"></el-option>
          <el-option label="Yuxiao Cai" value="Yuxiao Cai"></el-option>
        </el-select>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Check</el-button>
      </el-form-item>

        <el-table
          :data="form.FriendsNewsData"
          style="width: 100%">
          <el-table-column
            prop="Date"
            label="Date"
            width="180">
          </el-table-column>
          <el-table-column
            prop="COVIDResult"
            label="COVID Result"
            width="180">
          </el-table-column>
          <el-table-column
            prop="News"
            label="News">
          </el-table-column>
        </el-table>

      <el-form-item label="Friends News">

      </el-form-item>

      <el-form-item label="Your News:">
      </el-form-item>

      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="form.YourNewsDate"
          type="date"
          placeholder="Choose Your Date">
        </el-date-picker>
      </div>

      <div style="margin-top:20px;margin-bottom:20px;margin-left:20px">
      <el-form-item label="COVID result:"></el-form-item>
      <el-radio v-model="form.YourCOVIDResult" label="1">Positive</el-radio>
      <el-radio v-model="form.YourCOVIDResult" label="2">Negative</el-radio>
      </div>

      <el-row>
      <el-form-item label="News">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      </el-row>

      <el-row></el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { getNews } from '@/api/News'




export default {
  data() {
    return {
      form: {
        name: '',
        friends: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        FriendsNewsData:[{
            Date: '2022-01-04',
            COVIDResult: 'negative',
            News: 'I play soccer with my friends today.'
          }, {
            Date: '2022-02-03',
            COVIDResult: 'negative',
            News: 'I have a picnic with my families'
          }, {
            Date: '2022-03-04',
            COVIDResult: 'positive',
            News: 'I get sick today'
          }, {
            Date: '2022-03-23',
            COVIDResult: 'negative',
            News: 'I feel better today'
          }],
        YourNewsDate:'',
        YourCOVIDResult:'1',
        list:{

        },


      }
    }
  },

  // request data
  // when the news UI is open, it will show all initial data on the UI 
  created() {
    //response.data: get data
    getNews().then(response => {
      this.list = response.data // all data from the function getDashboard will be updated into the list
    })
  }, 

  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

