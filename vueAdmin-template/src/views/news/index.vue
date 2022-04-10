<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Friends:">

        <el-select v-model="form.region" placeholder="please select your friend">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Check</el-button>
      </el-form-item>

        <el-table
          :data="form.RestaurantData"
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
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        RestaurantData:[{
            Date: '2022-04-01',
            COVIDResult: 'positive',
            News: 'Washington Columbia Street 12th'
          }, {
            Date: '2016-05-04',
            COVIDResult: '王小虎',
            News: '上海市普陀区金沙江路 1517 弄'
          }, {
            Date: '2016-05-01',
            COVIDResult: '王小虎',
            News: '上海市普陀区金沙江路 1519 弄'
          }, {
            Date: '2016-05-03',
            COVIDResult: '王小虎',
            News: '上海市普陀区金沙江路 1516 弄'
          }],
        YourNewsDate:'',
        YourCOVIDResult:'1',


      }
    }
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

