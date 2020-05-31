import {request} from 'network/request'

export function getCategoryList() {
  return request({
    url: 'http://www.xmyxapp.com/api/tabs?sa='
  })
}

export function getCategoryInfo(id) {
  let url = 'http://www.xmyxapp.com/api/tab/'+id
  return request(url)
}

// export function getHomeData (){
//   return request({
//     url: 'http://www.xmyxapp.com/api/tab/1?start=0'
//   })
// }
