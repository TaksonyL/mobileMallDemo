for tabbarItem
:tabbar='tabbar'
tabbar:[
  {
    img: icon image
    imgAct: icon image by click
    //img import from public or static
    text: text
    path: router path
    textColor: text color
    textColorAct: text color by click
  }
]

for tabbarWrap
:tabbarConfig='tabbarConfig'
tabbarConfig:{
  backgroundColor: tabbar background-color
  textColorAll: all text color // will be covered with tabbar-textColor
  textColorAllAct: all text color by click // will be covered with tabbar-textColorAct
}