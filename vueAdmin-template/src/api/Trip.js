import request from '@/utils/request'

// export function TripInformation(username) {
//   return request({
//     url: '/user/trip',
//     method: 'get',
//     data: {
//         username,
//     }
//   })
// }

export function addATrip(trip) {
    return request({
      url: '/trip/add',
      method: 'post',
      Headers:{
        "Content-Type": "application/json"
      },
      data: {
        ...trip
      }
    })
  }

  export function getAllLocationList() {
    return request({
      url: '/trip/list/Eric',
      method: 'get',
    })
  }
  