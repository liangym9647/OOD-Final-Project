<template>
  <div class="dashboard-container">

    <el-row:span>
      <el-button type="danger" @click="toTakeout">To take out</el-button>
    </el-row:span>

    <el-row>
      
      <!-- first column -->
      <el-col span="10" style="margin-right:20px">
        <!-- doctor -->
        <el-row :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
          <!-- the information of Doctor part -->
          <div class="dashboard-block">

          <div v-for="doctor in Alldoctor" v-bind:key="doctor.doctorid">
            <el-row>
              <div class="head">Doctor:</div>
            </el-row>
            
            <div class="info">
              
                  <el-row>
                    <el-col :span="10">Name: </el-col>
                    <el-col :span="12" v-text="doctor.doctorname"></el-col>
                  </el-row>
              
                
                  <el-row>
                    <el-col :span="10">Department: </el-col>
                    <el-col :span="12" v-text="doctor.doctortype"></el-col>
                  </el-row>
              
                
                  <el-row>
                    <el-col :span="10">Time: </el-col>
                    <el-col :span="12" v-text="doctor.doctortime"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">Comment: </el-col>
                    <el-col :span="12" v-text="doctor.remark"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">DoctorID: </el-col>
                    <el-col :span="12" v-text="doctor.doctorid"></el-col>
                  </el-row>
              
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <!-- <el-row>
                  <hr/>
                </el-row> -->
            </div>
          </div>

            <div class="DoctormButton"> 
              <el-row:span>
                <el-button type="danger" @click="openDoctorPanel = true">Edit</el-button>
              </el-row:span>
            </div>

          
        
            <!-- Doctor dialog -->
              <el-dialog 
                title="Edit Your Doctor" 
                :visible.sync="openDoctorPanel"
              >
                <el-form :model="form">
                  <el-form-item label="Choose Your Doctor" :label-width="formLabelWidth">
                    <el-select v-model="form.DoctorType" placeholder="Doctor">
                      <div v-for="doctor in Alldoctor" v-bind:key="doctor.doctorid">
                        <el-option v-bind:label="doctor.doctorname" v-bind:value="doctor.doctorid"></el-option>
                      </div>
                    </el-select>
                  </el-form-item>
                </el-form>

                <el-row>
                  <el-button type="primary" @click="EditDoctor=true">Add</el-button>
                  <el-button type="danger">Delete</el-button>
                </el-row>


                <div slot="footer" class="dialog-footer">
                  <el-button @click="openDoctorPanel = false">cancel</el-button>
                  <!-- <el-button type="primary" @click="EditDoctor=true">confirm</el-button> -->
                </div>
              </el-dialog>



              <!-- the page of edit a doctor -->
              <el-dialog 
                title="Edit Doctor" 
                :visible.sync="EditDoctor"
              >
                <el-form :model="form">
                  <el-row>
                    <el-col :span="10">Write your doctor name: </el-col>
                    <el-input v-model="doctor.doctorname" placeholder="Please input your doctor"></el-input>
                    <el-col :span="10">Write your doctor department: </el-col>
                    <el-input v-model="doctor.doctortype" placeholder="Please input your doctor department"></el-input>
                  </el-row>
                  <div class="block">
                    <span class="demonstration">Choose your appointment date:</span>
                    <el-date-picker
                      v-model="doctor.doctortime"
                      type="date"
                      placeholder="choose your date">
                    </el-date-picker>
                  </div>

                  <el-row>
                    <el-col :span="10">Please input your comment </el-col>
                    <el-input v-model="doctor.remark" placeholder="Please input your comment"></el-input>
                    <el-col :span="10">Please input your doctor ID </el-col>
                    <el-input v-model="doctor.doctorid" placeholder="Please input your doctor ID"></el-input>
                  </el-row>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="EditDoctor = false">cancel</el-button>
                  <el-button type="primary" @click="EditDoctorClose($event)">save</el-button>
                </div>
              </el-dialog>
          </div>
        </el-row>

        <!-- medicine -->
        <el-row :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <!-- the information of Medicine part -->
          <div class="dashboard-block">
            <div v-for="medicine in Allmedicine" v-bind:key="medicine.medicineId">
            <el-row>
              <div class="head">Medicine: </div>
            </el-row>


            <div class="info">
              
                  <el-row>
                    <el-col :span="10">Medicine Name: </el-col>
                    <el-col :span="12" v-text="medicine.medicineName"></el-col>
                  </el-row>
              
                
                  <el-row>
                    <el-col :span="10">Take Medicine Time: </el-col>
                    <el-col :span="12" v-text="medicine.medicineTime"></el-col>
                  </el-row>
              
                  <el-row>
                    <el-col :span="10">Take Medicine Dose: </el-col>
                    <el-col :span="12" v-text="medicine.medicineDosage"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">Medicine ID: </el-col>
                    <el-col :span="12" v-text="medicine.medicineId"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">Take Medicine Time: </el-col>
                    <el-col :span="12" v-text="medicine.medicineFrequency"></el-col>
                  </el-row>
              
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              
            </div>
            </div>

            <div class="MedicineButton">
              <el-row>
                <el-button type="danger" @click="EditMedicine=true">Edit</el-button>
              </el-row>
            </div>

              <el-dialog 
                title="Edit Medicine" 
                :visible.sync="EditMedicine"
              >
                <el-form :model="form">
                  <el-row>
                    <el-col :span="10">Please choose your medicine:  </el-col>
                  </el-row>
                  <el-form-item label="Medicine " :label-width="formLabelWidth">
                    <!-- when choose the label value, it can show the corresponding value -->
                    <el-select v-model="form.Sneezing1" >
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- add a type of medicine or delete it -->
                  <el-row>
                  <el-button type="primary" @click="EditCurrentMedicine=true">Add</el-button>
                  <el-button type="danger" @click="EditCurrentMedicine=true">Delete</el-button>
                  </el-row>


                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="EditMedicine = false">cancel</el-button>
                </div>
              </el-dialog>

              <el-dialog 
                title="Current Medicine" 
                :visible.sync="EditCurrentMedicine"
              >
                <el-form :model="form">
                  <el-form-item label="Your Medicine: " :label-width="formLabelWidth">
                    <el-input v-model="medicine.medicineName" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Your Taking medicine time: " :label-width="formLabelWidth">
                    <el-input v-model="medicine.medicineTime" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Your medicine dose: " :label-width="formLabelWidth">
                    <el-input v-model="medicine.medicineDosage" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Your medicine ID: " :label-width="formLabelWidth">
                    <el-input v-model="medicine.medicineId" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Your taking medicine frequency: " :label-width="formLabelWidth">
                    <el-input v-model="medicine.medicineFrequency" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="EditCurrentMedicine = false">cancel</el-button>
                  <el-button type="primary" @click="CurrentMedicineClose($event)">confirm</el-button>
                </div>
              </el-dialog>

          </div>
        </el-row>
      </el-col >

      <!-- second column -->
      <el-col span="10">
        <!-- sym -->
        <el-row :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
          <div class="dashboard-block">
            <el-row>
              <div class="head">Symptom:</div>
            </el-row>
            
            <div class="info">
                  <el-row>
                    <el-col :span="10">Cough Frequency: </el-col>
                    <el-col :span="12" v-text="symptom.Coughfrequency"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">Fever Frequency: </el-col>
                    <el-col :span="12" v-text="symptom.Feverfrequency"></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="10">Sneezing Frequency: </el-col>
                    <el-col :span="12" v-text="symptom.Sneezingfrequency"></el-col>
                  </el-row>
                
                  <el-row>
                    <el-col :span="10">Severity: </el-col>
                    <el-col :span="12" v-text="symptom.severity"></el-col>
                  </el-row>
              
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              
            </div>

            <div class="SymptomButton"> 
              <el-row:span>
                <el-button type="danger" @click="openSymptomPanel = true">Edit</el-button>
              </el-row:span>




            <!-- Symptom dialog -->
              <el-dialog 
                title="Edit Your Symptom" 
                :visible.sync="openSymptomPanel"
              >
                <el-form :model="form">


              <el-row:span>
                <!-- when click the "Check and Edit "buttom, it will go to the Symptom part -->
                <el-button type="primary" @click="openCoughPanel = true">Edit Cough</el-button>
                <el-button type="primary" @click="openFeverPanel = true">Edit Fever</el-button>
                <el-button type="primary" @click="openSneezingPanel = true">Edit Sneezing</el-button>
              </el-row:span>


                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="openSymptomPanel = false">cancel</el-button>
                  <el-button type="primary" @click="handleSymptomClose">confirm</el-button>
                </div>
              </el-dialog>





              <!-- the page of edit Cough symptom -->
              <el-dialog 
                title="Edit Cough" 
                :visible.sync="openCoughPanel"
              >
                <el-form :model="form">
                  <el-row>
                    <el-col :span="10">1. My coughing problem affects my voice.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <!-- when choose the label value, it can show the corresponding value, cough1 -->
                    <el-select v-model="form.Cough[0]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">2. My coughing problem limits my physical activity </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[1]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">3. My cough is worse when I lie down </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[2]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">4. My coughing problem upsets me </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[3]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">5. My coughing problem causes me to restrict my personal and social life.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[4]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">6. People ask me if I am sick because I cough a lot.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[5]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">7. I tend to avoid places because of my cough problem.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[6]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">8. I feel embarrassed because of my coughing problem.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[7]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">9. People ask, “What’s wrong?” Because I cough a lot. </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[8]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">10. I run out of air when I cough. </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Cough[9]" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="openCoughPanel = false">cancel</el-button>
                  <el-button type="primary" @click="CoughClose">confirm</el-button>
                </div>
              </el-dialog>





              <!-- the page of edit Fever symptom -->
              <el-dialog 
                title="Edit Fever" 
                :visible.sync="openFeverPanel"
              >
                <el-form :model="form">
                  <el-row>
                    <el-col :span="10">1. My temperature is higher than 80F.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <!-- when choose the label value, it can show the corresponding value, cough1 -->
                    <el-select v-model="form.Fever.Fever1" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">2. My fever problem limits my physical activity </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Fever.Fever2" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">3. My cough is worse when I lie down </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Fever.Fever3" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">4. My fever problem upsets me </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Fever.Fever4" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">5. My fever problem causes me sleepy.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Fever.Fever5" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="openFeverPanel = false">cancel</el-button>
                  <el-button type="primary" @click="FeverClose">confirm</el-button>
                </div>
              </el-dialog>




              <!-- the page of edit Sneezing symptom -->
              <el-dialog 
                title="Edit Sneezing" 
                :visible.sync="openSneezingPanel"
              >
                <el-form :model="form">
                  <el-row>
                    <el-col :span="10">1. My Sneezing is servere when the wheater is cold.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <!-- when choose the label value, it can show the corresponding value, cough1 -->
                    <el-select v-model="form.Sneezing.Sneezing1" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">2. My sneezing problem limits my physical activity. </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Sneezing.Sneezing2" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">3. My sneezing causes me dizzy. </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Sneezing.Sneezing3" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">4. My sneezing causes me headache. </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Sneezing.Sneezing4" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-row>
                    <el-col :span="10">5. My sneezing problem causes me sleepy.  </el-col>
                  </el-row>
                  <el-form-item label="Frequency " :label-width="formLabelWidth">
                    <el-select v-model="form.Sneezing.Sneezing5" placeholder="choose your frequency">
                      <el-option label="0" value="0"></el-option>
                      <el-option label="1" value="1"></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="openSneezingPanel = false">cancel</el-button>
                  <el-button type="primary" @click="SneezingClose">confirm</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
        </el-row>
       

        <!-- acti -->
        <el-row :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
          <div class="dashboard-block">
          <div v-for="(item,index) in activity" v-bind:key="index">
            <el-row>
              <div class="head">Activity: </div>
            </el-row>
      
            <div class="info">
              
                  <el-row>
                    <el-col :span="10">Floor Climbing：</el-col>
                    <el-col :span="12" v-text="item.floorClimbing"></el-col>
                  </el-row>
              
                
                  <el-row>
                    <el-col :span="10">Running Step: </el-col>
                    <el-col :span="12" v-text="item.step"></el-col>
                  </el-row>
              
                
                  <el-row>
                    <el-col :span="10">Distance: </el-col>
                    <el-col :span="12" v-text="item.distance"></el-col>
                  </el-row>
              
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              
            </div>
          </div>
            
              <div class="SymptomButton"> 
                <el-row>
                  <el-button type="primary" @click="handleActivityUpdate($event)">Update</el-button>
                </el-row>
              </div>
            

            
        
          </div>
        </el-row>

        <!-- Risk -->
        <el-row :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <!-- the information of Risk part -->
          <div class="dashboard-block">
            <el-row>
              <div class="head">Risk: </div>
            </el-row>

            <el-row>
              <el-col :span="10">Risk Percentage: </el-col>
              <el-col :span="12" v-text="risk.riskpercentage"></el-col>
            </el-row>

            <div class="info">
              
                  <el-row>
                    <el-col :span="10">Risk Level: </el-col>
                    <el-col :span="12" v-text="risk.risklevel"></el-col>
                  </el-row>
                  
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

















<script>
import router from '@/router'
import { mapGetters } from 'vuex'
// api getdashboard: request data from back end
import { getDashboard, getDoctorList, saveDoctor, handleSymptomClose,syncActivity,EditMyDoctorClose,getMedicineList,saveMedicine } from '@/api/dashboard'


export default {
  name: 'dashboard',

  data() {
    return {
      // when entering the page, these function cannot be shown 
      router: router,
      username: this.$store.getters.name,
      openSymptomPanel: false, //false: cannot show the pop up window, true: can show
      
      openCoughPanel : false ,
      openFeverPanel:false,
      openSneezingPanel:false,
      openDoctorPanel :false,
      
      EditDoctor:false,

      EditMedicine:false,
      EditCurrentMedicine:false,

      CurrentDoctor:false,


      symptom: {
        Coughfrequency: 'high',
        Feverfrequency: 'high',
        Sneezingfrequency: 'high',
        severity: "high"
      },

      activity: [{
        floorClimbing: "",
        step:"",
        distance: ""
      }],

      Alldoctor: [
        {
          doctorname: "Melo",
          doctortype: "dental",
          doctortime: "2021-04-05 14:30",
          remark:"hello",
          doctorid:"123999329",
        },
        {
          doctorname: "Melo2",
          doctortype: "dental",
          doctortime: "2021-04-05 14:30",
          remark:"hello",
          doctorid:"12399939",
        },
      ],

      doctor: {
          doctorname: "Melo",
          doctortype: "dental",
          doctortime: "2021-04-05 14:30",
          remark:"hello",
          doctorid:"123999329",
      },

      Allmedicine:[
        {
          medicineName:"Victim C",
          medicineTime:"twice per day",
          medicineDosage:"5mg",
          medicineId:"1737828288",
          medicineFrequency:"twice per day"
        },
      ],

      medicine:{
        //userName
        medicineName:"Victim D",
        medicineTime:"three times per day",
        medicineDosage:"5mg",
        medicineId:"1737828288",
        medicineFrequency:"twice per day"
      },


      risk:{
        riskpercentage:"87%",
        risklevel:"high",
      },
      avgCough:0.0,

      form: {
          name: '',
          SymptomMonth: '',
          Symptom:'',
          Cough:['2', '2', '2', '2', '2','2','2', '2','2', '2'],
        
          Fever:{
            Fever1:'',
            Fever2:'',
            Fever3:'',
            Fever4:'',
            Fever5:'',
          },
          Sneezing:{
            Sneezing1:'',
            Sneezing2:'',
            Sneezing3:'',
            Sneezing4:'',
            Sneezing5:'',
          },

          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          SymptomResult:{},
        },
    }
  },
  
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },

  // request data
  // when the dashborad UI is open, it will show all initial data on the UI 
  created() {
    //response.data: get data
    //then((data)=>{ })里的data是指接口成功返回的数据,包含请求头,请求体,等信息;这里的then()方法有两个参数,第一个是成功时的回调方法,默认给这个方法传递了成功的数据,另一个是失败的方法catch,以及失败的数据,第二个可选
  //   getDashboard().then(response => {
  //     //this.list = response.data // all data from the function getDashboard will be updated into the list
  //     this.Alldoctor = response.data;
  //  }),

    getDoctorList('Eric').then( response => {
      console.log(response)
      this.Alldoctor = response.data
    }),

    getMedicineList('Eric').then( response => {
      console.log(response)
      this.Allmedicine = response.data
    }),

    syncActivity("Eric").then(response => {
        this.activity = response.data
    })
    

    // getActivity('Eric').then(response=>{
    //   console.log(response)
    //   this.Alldoctor = response.data
    // })
    

  },

  methods: {
    toTakeout() {
      // jump to the route
      this.router.push({path:'takeout/index'}) 
    },

    handleActivityUpdate(e) {
      e.preventDefault();

      syncActivity("Eric").then(response => {
        this.activity = response.data
      })
    },

      async handleSymptomClose(SymptomData) {
        await this.$confirm('sure to exit?')
          .then(response => {
          this.SymptomResult = response.data
          })
          .catch(_ => {});

        this.openSymptomPanel = false 
      },




    // when click confirm bottom of cough (in the sysmptom part), it will exit the current window and update value
    async CoughClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            
            const list1 = []
            this.form.Cough.forEach(item => {
              const val = parseInt(item)
              list1.push(val)
            })

            var CoughSum = 0;
            for (var i=list1.length-1; i>=0; i--) {
                CoughSum += list1[i];
            }

            console.log(CoughSum)
            this.avgCough = (CoughSum / 10)
            if (this.avgCough>=0 && this.avgCough<=1.5){
              this.symptom.Coughfrequency='low';
            }
            else if (this.avgCough>1.5 && this.avgCough<=3.5){
              this.symptom.Coughfrequency='middle';
            }
            else {
              this.symptom.Coughfrequency='high';
            }
            done();
          })
          .catch(_ => {});

        this.openCoughPanel = false 
      },

      async FeverClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.openFeverPanel = false 
      },

      async SneezingClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.openSneezingPanel = false 
      },



      // doctor part
      async DoctorClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.EditDoctor = false 
      },

    //add a doctor
    async EditDoctorClose(e) {
      e.preventDefault();
      
      console.log(this.doctor)
      await saveDoctor('Eric', this.doctor).then(response => {
        console.log(response);
        this.Alldoctor.push(this.doctor);
        //the Alldoctor will increase a doctor information

        console.log(this.doctor);
        
      });

      this.EditDoctor = false;

      // const paramas={...this.Alldoctor}

      // getDoctorList('Eric',this.Alldoctor).then(response => {
      //   console.log("request complished")
      //   this.Alldoctor=response.data
      // });
      // EditDoctor = false
    },

      // medicine part
      async MedicineClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.EditMedicine = false 
      },

      async CurrentMedicineClose(e) {

         e.preventDefault();
      
        console.log(this.medicine)
        await saveMedicine('Eric', this.medicine).then(response => {
          console.log(response);
          this.Allmedicine.push(this.medicine);
          //the Alldoctor will increase a doctor information

          console.log(this.doctor);
          
        });

        this.EditCurrentMedicine = false;
      },

      
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/color.scss';
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-block {
    padding: 20px;
    background-color: #ffffff;
    margin: 10px 0;
    color:$grey;
    border-radius: 10px;
    box-shadow: #000 0 0 10px 0;
    font-size: 14px;
    .head{
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .num{
      margin-left: 30px;
      height: 40px;
      span {
        font-size: 36px;
        font-weight: bold;
        color: #2B8DE5;
        height: 40px;
        line-height: 40px;
      }
    }
    .infoExtra{
      margin-left: 30px;
      height: 40px;
      line-height: 40px;
    }
    .infoExtra+.info{
      margin-top: 0;
    }
    .info{
      height: 30px;
      margin: 40px 0 0 20px;
      line-height: 30px;
      color: #a6a6a6;
      position: relative;
      .el-col-12{
        font-size: 18px;
        color: #000000;
      }
    }
  }
}
</style>
