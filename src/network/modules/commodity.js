import {request} from 'network/request'

export function getCommodityData (type,id){
  return request({
    url: 'http://www.xmyxapp.com/api/'+type+'/'+id+'/items'
  })
}

export function commodityUpdata(type,id,start) {
  return request({
    url: 'http://www.xmyxapp.com/api/'+type+'/'+id+'/items?start='+start})
}

// export function getHomeData (){
//   return request({
//     url: 'http://www.xmyxapp.com/api/tab/1?start=0'
//   })
// }

// export function goodUpdate(start,sort) {
//   return request({
//     url: 'http://www.xmyxapp.com/api/tab/1/feeds',
//     method: 'get',
//     params: {start,sort}
//   })
// }
