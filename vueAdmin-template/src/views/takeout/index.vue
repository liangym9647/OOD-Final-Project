<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
    <div class="RestaurantButton"> 
        <el-row:span>
            <el-button type="primary" id="btn_get_rest">Get Your Restaurant Nearby</el-button>
        </el-row:span>
        <el-input
        placeholder="Your Location"
        v-model="form.Location"
        :disabled="true">
        </el-input>
    </div>
        <el-table
          :data="form.RestaurantData"
          style="width: 100%">
          <el-table-column
            prop="Name"
            label="Restaurant Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Distance"
            label="Distance"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Address"
            label="Address">
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
            Name: 'Whole Food',
            Distance: '320m',
            Address: 'Washington Columbia Street 12th'
          }, {
            Name: '2016-05-04',
            Distance: '王小虎',
            Address: '上海市普陀区金沙江路 1517 弄'
          }, {
            Name: '2016-05-01',
            Distance: '王小虎',
            Address: '上海市普陀区金沙江路 1519 弄'
          }, {
            Name: '2016-05-03',
            Distance: '王小虎',
            Address: '上海市普陀区金沙江路 1516 弄'
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

