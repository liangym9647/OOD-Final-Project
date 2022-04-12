import request from '@/utils/request'

export function getNews(username) {
    return request({
      url: '/user/getNews',
      method: 'post',
      data: {
        username,
      }
    })
  }