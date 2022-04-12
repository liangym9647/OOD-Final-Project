import request from '@/utils/request'


export function getAllNews() {
  return request({
    url: '/news/listall',
    method: 'get',
  })
}

export function getNews(username) {
    return request({
      url: `/news/list/${username}`,
      method: 'get',
    })
  }


export function updateNews(username,News) {
  return request({
    url: `/news/add`,
    method: 'post',
    data:{
      username,
      ...News
    }
  })
}