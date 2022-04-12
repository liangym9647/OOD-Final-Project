import request from '@/utils/request'

export function TripInformation(username) {
  return request({
    url: '/user/trip',
    method: 'get',
    data: {
        username,
    }
  })
}

export function UpdateMyTrip(username,Location) {
    return request({
      url: '/user/trip/update',
      method: 'get',
      data: {
          username,
      }
    })
  }

  

  export function getAllLocationList(username,Location) {
    return request({
      url: '/user/trip/update',
      method: 'get',
      data: {
          username,
      }
    })
  }
  