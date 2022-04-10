<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
    <div class="RestaurantButton"> 
        <el-row:span>
            <el-button type="primary" id="btn_get_rest">Get Your Location</el-button>
        </el-row:span>
        
        <el-input
        placeholder="Your Location"
        v-model="form.Location"
        :disabled="true">
        </el-input>

        
        <div style="margin-top:30px;">
        <el-row:span>
            <el-button type="primary" id="btn_get_rest">Update Your Trip</el-button>
        </el-row:span>
        </div>
    </div>
        <el-table
          :data="form.RestaurantData"
          style="width: 100%">
          <el-table-column
            prop="DateTime"
            label="Date and Time"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Location"
            label="Location"
            width="180">
          </el-table-column>
        </el-table>
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
        Location:'George Washington University',
        RestaurantData:[{
            DateTime: '2022-01-02 23:04:03',
            Location: 'Crystal City',
          }, {
            DateTime: '2016-05-04',
            Location: '王小虎',
          }, {
            DateTime: '2016-05-01',
            Location: '王小虎',
          }, {
            DateTime: '2016-05-03',
            Location: '王小虎',
          }],
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

#btn_get_rest{
    margin-bottom: 10px;
}

</style>

