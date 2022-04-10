<template>
  <div class="dashboard-container">

    <el-row:span>
      <el-button type="danger" @click="toTakeout">To take out</el-button>
    </el-row:span>

    <el-row :gutter="20">


      <!-- the information of Symptom part -->
      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
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
                <el-form-item label="Comment" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Choose Your Month" :label-width="formLabelWidth">
                  <el-select v-model="form.SymptomMonth" placeholder="Month">
                    <el-option label="2022 January" value="2022 January"></el-option>
                    <el-option label="2022 February" value="2022 February"></el-option>
                    <el-option label="2022 March" value="2022 March"></el-option>
                    <el-option label="2022 April" value="2022 April"></el-option>
                  </el-select>
                </el-form-item>

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
                <el-form-item label="Comment" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-row>
                  <el-col :span="10">1. My coughing problem affects my voice.  </el-col>
                </el-row>
                <el-form-item label="Frequency " :label-width="formLabelWidth">
                  <!-- when choose the label value, it can show the corresponding value, cough1 -->
                  <el-select v-model="form.cough1" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough2" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough3" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough4" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough5" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough6" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough7" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough8" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough9" placeholder="choose your frequency">
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
                  <el-select v-model="form.cough10" placeholder="choose your frequency">
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
                <el-form-item label="Comment" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-row>
                  <el-col :span="10">1. My temperature is higher than 80F.  </el-col>
                </el-row>
                <el-form-item label="Frequency " :label-width="formLabelWidth">
                  <!-- when choose the label value, it can show the corresponding value, cough1 -->
                  <el-select v-model="form.Fever1" placeholder="choose your frequency">
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
                  <el-select v-model="form.Fever2" placeholder="choose your frequency">
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
                  <el-select v-model="form.Fever3" placeholder="choose your frequency">
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
                  <el-select v-model="form.Fever4" placeholder="choose your frequency">
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
                  <el-select v-model="form.Fever5" placeholder="choose your frequency">
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
                <el-form-item label="Comment" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-row>
                  <el-col :span="10">1. My Sneezing is servere when the wheater is cold.  </el-col>
                </el-row>
                <el-form-item label="Frequency " :label-width="formLabelWidth">
                  <!-- when choose the label value, it can show the corresponding value, cough1 -->
                  <el-select v-model="form.Sneezing1" placeholder="choose your frequency">
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
                  <el-select v-model="form.Sneezing2" placeholder="choose your frequency">
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
                  <el-select v-model="form.Sneezing3" placeholder="choose your frequency">
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
                  <el-select v-model="form.Sneezing4" placeholder="choose your frequency">
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
                  <el-select v-model="form.Sneezing5" placeholder="choose your frequency">
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
      </el-col>














      <!-- the information of Activity part -->
      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <div class="dashboard-block">
          <el-row>
            <div class="head">Activity: </div>
          </el-row>
          
          <el-row>
            <div class="num"> Date: </div>
          </el-row>
          
          <div class="info">
            
                <el-row>
                  <el-col :span="10">Floor Climbing：</el-col>
                  <el-col :span="12" v-text="activity.floorClimbing"></el-col>
                </el-row>
             
              
                <el-row>
                  <el-col :span="10">Running Step: </el-col>
                  <el-col :span="12" v-text="activity.step"></el-col>
                </el-row>
            
              
                <el-row>
                  <el-col :span="10">Distance: </el-col>
                  <el-col :span="12" v-text="activity.distance"></el-col>
                </el-row>
            
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            
          </div>

          <div class="SymptomButton"> 
            <el-row:span>
              <el-button type="primary" @click="handleActivityUpdate">Update</el-button>
            </el-row:span>
          </div>

          
       
        </div>
      </el-col>












      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <!-- the information of Doctor part -->
        <div class="dashboard-block">
          <el-row>
            <div class="head">Doctor:</div>
          </el-row>
          
          <div class="info">
            
                <el-row>
                  <el-col :span="10">Name: </el-col>
                  <el-col :span="12" v-text="doctor.name"></el-col>
                </el-row>
             
              
                <el-row>
                  <el-col :span="10">Department: </el-col>
                  <el-col :span="12" v-text="doctor.department"></el-col>
                </el-row>
            
              
                <el-row>
                  <el-col :span="10">Time: </el-col>
                  <el-col :span="12" v-text="doctor.time"></el-col>
                </el-row>
            
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            
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
                    <el-option label="2022 January" value="2022 January"></el-option>
                    <el-option label="2022 February" value="2022 February"></el-option>
                    <el-option label="2022 March" value="2022 March"></el-option>
                    <el-option label="2022 April" value="2022 April"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer">
                <el-button @click="openDoctorPanel = false">cancel</el-button>
                <el-button type="primary" @click="EditDoctor=true">confirm</el-button>
              </div>
            </el-dialog>



             <!-- the page of edit a doctor -->
            <el-dialog 
              title="Edit Doctor" 
              :visible.sync="EditDoctor"
            >
              <el-form :model="form">
                <el-row>
                  <el-col :span="10">Choose your appointment date: </el-col>
                </el-row>
                <div class="block">
                  <span class="demonstration">Your AppointmentDate</span>
                  <el-date-picker
                    v-model="form.AppointmentDate"
                    type="datetime"
                    placeholder="Select Date and Time"
                    default-time="12:00:00">
                  </el-date-picker>
                </div>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="EditDoctor = false">cancel</el-button>
                <el-button type="primary" @click="DoctorClose">confirm</el-button>
              </div>
            </el-dialog>
        </div>
      </el-col>















      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <!-- the information of Medicine part -->
        <div class="dashboard-block">
          <el-row>
            <div class="head">Medicine: </div>
          </el-row>

          <el-row>
            <div class="num"> Name: </div>
          </el-row>

          <div class="info">
            
                <el-row>
                  <el-col :span="10">Dose: </el-col>
                  <el-col :span="12" v-text="medicine.dose"></el-col>
                </el-row>
             
              
                <el-row>
                  <el-col :span="10">Frequency: </el-col>
                  <el-col :span="12" v-text="medicine.frequency"></el-col>
                </el-row>
            
              
            
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            
          </div>

          <div class="MedicineButton"> 
            <el-button type="danger" @click="EditMedicine=true">Edit</el-button>
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
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="EditMedicine = false">cancel</el-button>
                <el-button type="primary" @click="EditCurrentMedicine=true">confirm</el-button>
              </div>
            </el-dialog>

            <el-dialog 
              title="Current Medicine" 
              :visible.sync="EditCurrentMedicine"
            >
              <el-form :model="form">
                <el-form-item label="Your Medicine: " :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Dose: " :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Frequency Per Day: " :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="EditCurrentMedicine = false">cancel</el-button>
                <el-button type="primary" @click="CurrentMedicineClose">confirm</el-button>
              </div>
            </el-dialog>

        </div>
      </el-col>
















      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
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
      </el-col>
    </el-row>
  </div>
</template>

















<script>
import router from '@/router'
import { mapGetters } from 'vuex'
// go to dashboard to request data
import { getDashboard, syncActivity } from '@/api/dashboard'

export default {
  name: 'dashboard',

  data() {
    return {
      router: router,
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

      activity: {
        floorClimbing: 2,
        step:109121,
        distance: "10 km"
      },
      doctor: {
        name: "Melo",
        department: "dental",
        time: "2021-04-05 14:30",
      },
      medicine:{
        dose:"5mg",
        frequency:"twice per day",
      },
      risk:{
        riskpercentage:"87%",
        risklevel:"high",
      },
      list: {
        allMedicallCount: '...',
        dayMedicallCount: '...',
        weekMedicallCount: '...',
        monthMedicallCount: '...',

        allConsCount: '...',
        dayConsCount: '...',
        weekConsCount: '...',
        monthConsCount: '...',

        allHospCount: '...',
        dayHospCount: '...',
        weekHospCount: '...',
        monthHospCount: '...',

        allDoctorCount: '...',
        dayDoctorCount: '...',
        weekDoctorCount: '...',
        monthDoctorCount: '...',

        allTsConsCount: '...',
        allOpsCount: '...'
      },

      form: {
          name: '',
          SymptomMonth: '',
          Symptom:'',
          Cough1:'',
          Cough2:'',
          Cough3:'',
          Cough4:'',
          Cough5:'',
          Cough6:'',
          Cough7:'',
          Cough8:'',
          Cough9:'',
          Cough10:'',
          Fever1:'',
          Fever2:'',
          Fever3:'',
          Fever4:'',
          Fever5:'',
          Sneezing1:'',
          Sneezing2:'',
          Sneezing3:'',
          Sneezing4:'',
          Sneezing5:'',
          DoctorType:'',
          AppointmentDate:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
  created() {
    getDashboard().then(response => {
      this.list = response.data
    })
  }, 

  methods: {
    toTakeout() {
      // jump to the route
      this.router.push({path:'takeout/index'}) 
    },
    handleActivityUpdate() {
      syncActivity(1).then(response => {
        console.log("request complished")
      })
    },

      async handleSymptomClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.openSymptomPanel = false 
      },


    // when click confirm bottom of cough (in the sysmptom part), it will exit the current window and update value
    async CoughClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
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

      // medicine part
      async MedicineClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.EditMedicine = false 
      },

      async CurrentMedicineClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.EditCurrentMedicine = false 
      },

      async CurrentDoctorClose(done) {
        await this.$confirm('sure to exit?')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.CurrentDoctor = false 
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
