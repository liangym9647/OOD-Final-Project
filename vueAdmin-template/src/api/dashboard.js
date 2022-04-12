import request from '@/utils/request'


// get all initial data when open the dashboard webpage
export function getDashboard() {
  return request({
    url: '/dashboard/data', //back end port
    method: 'post'
  })
}

export function getDoctorList(username) {
  return request({
    url: `/doctor/list/${username}`,
    method: 'get',
  })
}

export function saveDoctor(username,doctor) {
  return request({
    url: `/doctor/add`,
    method: 'post',
    data:{
      username,
      ...doctor
    }
  })
}



export function syncActivity(username) {
  return request({
    url: `/activity/list/${username}`,
    method: 'get',
  })
}

export function handleSymptomClose() {
  return request({
    url: '/dashboard/data/handleSymptomClose', //back end port
    method: 'post',
    data:{

    }
  })
}

export function getMedicineList(username) {
  return request({
    url: `/medicine/list/${username}`,
    method: 'get',
  })
}

export function saveMedicine(username, medicine) {
  return request({
    url: `/medicine/add`,
    method: 'post',
    data:{
      userName: username,
      ...medicine
    }
  })
}

export function EditMyDoctorClose(doctor) {
  return request({
    url: '/dashboard/data/EditMyDoctorClose', //back end port
    method: 'post',
    data:{
      doctor:doctor
    }
  })
}



