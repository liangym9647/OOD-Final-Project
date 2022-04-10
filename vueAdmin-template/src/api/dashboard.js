import request from '@/utils/request'

export function getDashboard() {
  return request({
    url: '/dashboard/data',
    method: 'post'
  })
}

export function syncActivity(userId) {
  console.log("开始sync步数")
  return request({
    url: '/dashboard/data',
    method: 'post',
    data:{
      userId: userId
    }
  })
}
