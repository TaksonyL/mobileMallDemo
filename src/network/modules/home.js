import {request} from 'network/request'

export function getHomeData (){
  return request({
    url: 'http://www.xmyxapp.com/api/tab/1?start=0'
  })
}
