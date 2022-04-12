<template>
  <div class="app-container">

    <el-row>
      <el-col span="4" label="Friends:">

        <el-select v-model="chooseFriend" placeholder="please select your friend">
          <div v-for="(item, index) in friends" v-bind:key="index">
            <el-option :label="item" :value="item"></el-option>
          </div>

          <!-- <el-option label="Qiaozhu Qiang" value="Qiaozhu Qiang"></el-option>
          <el-option label="Yuxiao Cai" value="Yuxiao Cai"></el-option> -->
        </el-select>

      </el-col>

      <el-col span="4">
        <el-button type="primary" @click="checkFriendsNews">Check</el-button>
      </el-col>
    </el-row>
      

    <el-table :data="FriendsNewsData" style="width: 100%">

      <el-table-column
        prop = "userName"
        label="UserName"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>

       <el-table-column
        prop="covidresult"
        label="COVID result"
        width="180">
      </el-table-column>

      <el-table-column
        prop="news"
        label="News"
        width="180">
      </el-table-column>
    </el-table>


    <hr>
    <el-form ref="form" :model="form" label-width="120px">
      <h2>Publish Your News</h2>

      <el-form-item label="Date:">
      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="form.YourNewsDate"
          type="date"
          placeholder="Choose Your Date">
        </el-date-picker>
      </div>
      </el-form-item>

      
      <el-form-item label="Result:">
        <el-select v-model="form.YourCOVIDResult" >
          <el-option label="Positive" value="Positive"></el-option>
          <el-option label="Negative" value="Negative"></el-option>
        </el-select>
      </el-form-item>
    
      <el-form-item label="News">
        <el-input type="textarea" v-model="form.YourNews"></el-input>
      </el-form-item>
 
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getAllNews, updateNews, getNews} from '@/api/News'
import {parseTime} from '@/utils'



export default {
  data() {
    return {
      chooseFriend: '',
      friends: ['Bo Liu', 'Qiaozhu Qiang', 'Yuxiao Cai'],
      form: {
        username: this.$store.getters.name,

        YourNewsDate:'',
        YourCOVIDResult:'',
        YourNews:'',
      },

      FriendsNewsData:[
        {
          userName:'Chaozhu Qiang',
          date: '2022-01-04',
          covidresult: 'Negative',
          news: 'I play soccer with my friends today.'
        }, {
        userName:'Yuxiao Cai',
        date: '2022-02-03',
        covidresult: 'Negative',
        news: 'I have a picnic with my families'
      }, {
        userName:'Yiming Liang',
        date: '2022-03-04',
        covidresult: 'Positive',
        news: 'I get sick today'
      }, {
        userName:'Eric',
        date: '2022-03-23',
        covidresult: 'Negative',
        news: 'I feel better today'
      }
      ],

      NewsInfo:{
        userName:'',
        date: '',
        covidresult: '',
        news: ''
      },
    }
  },

  // request data
  // when the news UI is open, it will show all initial data on the UI 
  created() {
    //response.data: get data
    getAllNews().then(response => {
      this.FriendsNewsData = response.data // all data from the function getDashboard will be updated into the list
    })
  }, 

  methods: {

    checkFriendsNews() {
      getNews(this.chooseFriend).then(response => {
        this.FriendsNewsData = response.data // all data from the function getDashboard will be updated into the list
      })
    },


    async onSubmit() {
      

      this.NewsInfo.userName='Eric',
      this.NewsInfo.date=parseTime(this.form.YourNewsDate, "{y}.{m}.{d}"),
      this.NewsInfo.covidresult=this.form.YourCOVIDResult,
      this.NewsInfo.news=this.form.YourNews,

      console.log()

      const that = this;
      await updateNews(this.username, this.NewsInfo).then(response => {
        console.log(response.data);

        that.$message('Submit Success!')
        that.FriendsNewsData.push({
          userName: 'Eric',
          date: parseTime(that.form.YourNewsDate, "{y}.{m}.{d}"),
          covidresult: that.form.YourCOVIDResult,
          news: that.form.YourNews,
        })

        that.form.YourNewsDate = ''
        that.form.YourCOVIDResult = ''
        that.form.YourNews = ''
      })
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

