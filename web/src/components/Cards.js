import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
          <h1>探索神秘的旅程</h1>
          <div className="cards__container">
              <div className="card__wrapper">
                  {/* <img src='images/img-3.jpg' alt='123'/> */}
                  <ul className="cards__items">
                      <CardItems
                          src='images/img-1.jpg'
                          text='登上百岳眺望日出'
                          label='登山'
                          path='/services'
                      />
                       <CardItems
                          src='images/img-2.jpg'
                          text='在海上小島度假'
                          label='度假'
                          path='/services'
                      />
                      <CardItems
                          src='images/img-3.jpg'
                          text='暢遊在地中海上'
                          label='旅遊'
                          path='/services'
                      />
                       <CardItems
                          src='images/img-4.jpg'
                          text='在海島上進行一場足球運動'
                          label='運動'
                          path='/services'
                      />
                  </ul>
                  <ul className="cards__items">
                      <CardItems
                          src='images/img-5.jpg'
                          text='入住5星級酒店'
                          label='住宿'
                          path='/services'
                      />
                       <CardItems
                          src='images/img-6.jpg'
                          text='在大阪城市中穿梭'
                          label='逛街'
                          path='/services'
                      />
                      <CardItems
                          src='images/img-7.jpg'
                          text='在夜空當中拍攝星空'
                          label='攝影'
                          path='/services'
                      />
                       <CardItems
                          src='images/img-8.jpg'
                          text='在沙漠中經歷一趟駱駝商隊'
                          label='歷史'
                          path='/services'
                      />
                      </ul>
                  </div>
          </div>
          
    </div>
  )
}

export default Cards