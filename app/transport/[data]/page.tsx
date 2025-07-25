
'use client'
 import './transport.scss'
import cities from '@/constants/cities'
import useAppStore from '@/store/useAppStore'
import useUserStore from '@/store/useUserDataStore'
import { Bus, BusFront, Plus, Star } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link  from 'next/link';
import weekDays from '@/constants/weekDays'
import currentDay from '@/utils/getCurrentDay'
import { memo } from 'react';
export default memo(function Transport(params: string) {
  const [activeDay, setActiveDay] = useState(currentDay)
  const data = useAppStore(state => state.data)
  const setData = useAppStore(state => state.setData)
  const userRegion = useUserStore(state => state.region)

  const searchParams = useSearchParams()
 
  const type = searchParams.get('type')
  const startingPointId = searchParams.get('startingPointId')
  const finalPointId = searchParams.get('finalPointId')
      
  let groupedData = Object.groupBy(data, ({ finalPointId, startingPointId, type }) =>
    type + '&' + startingPointId + '_' + finalPointId
  );
  useEffect(() => {
    if (data.length == 0 || data.toString().includes('error')) {

      const path = '/api/transport/' + cities[userRegion]
      fetch(path)
        .then((res) => res.json())
        .then((res) => {
          if (!JSON.stringify(res).includes('error')) {
            setData(res)
          }
        })
        .catch(console.error);
    }
  })
  console.log(currentDay)
  const favoriteList = useUserStore(state => state.favoriteBusList)
  const toggleFavoriteList = useUserStore(state => state.toggleFavoriteBusList)
  if (data[0]) {
    let currentData = groupedData[type + '&' + startingPointId + '_' + finalPointId] || []
    const name = data[0].startingPoint.name.toLowerCase() != userRegion ? data[0].startingPoint.shortName || data[0].startingPoint.name : data[0].finalPoint.shortName || data[0].finalPoint.name
 
    const firstName = currentData[0].startingPoint.shortName || currentData[0].startingPoint.name
    const secondName = currentData[0].finalPoint.shortName || currentData[0].finalPoint.name
    const fullName = firstName + ' - ' + secondName
    console.log(currentData)
    let isFavorite = favoriteList.indexOf(name + '&' + currentData[0].type) != -1
    let renderedCount=0
    return (
      <div className="conteiner">
        <div className="transport">
          <Link href='/'>
            <Plus size={30} className="transport__cross" /></Link>
          <div className="transport__header">
            <div className="transport__iconBox">
              {currentData[0].type == 'Bus' ? <BusFront id='busIcon' size={31}></BusFront > : <Bus id='taxiBusIcon' size={31}></Bus>}
            </div>
                
            <div className="transport__textBox">
              <p className="transport__name">{fullName}</p>
              <p className="transport__type">{currentData[0].type == 'Bus' ? 'Автобус' : "Маршрутное такси"}</p>
            
            </div>
            <button id='like' className='transport__like' onClick={() => {
              let button = document.getElementById('like')
              if (button) {
                button.style.pointerEvents = 'none'
                let timeout = setTimeout(() => {
                  button.style.pointerEvents = ''
                  clearTimeout(timeout)
                }, 200)
              }
              toggleFavoriteList(name + '&' + currentData[0].type)
            }}>
              <Star className={isFavorite ? 'transport__likeIcon transport__likeIcon_active' : "transport__likeIcon"} fill={isFavorite ? '#dca430' : "#ffffff"} size={28}></Star>
            </button>
          </div>
          <div className="transport__days">{
          weekDays.map((day) => {
            return (<button key={day} onClick={() => {
              setActiveDay(day)
            }} className={day==activeDay?'transport__day transport__day_active':'transport__day'}>{day }</button>)
          })
          }</div>
          <div className="transport__list">
            
            {currentData.sort((a, b) => {
              return parseFloat(a.departureTime) - parseFloat(b.departureTime)
            
            }).map((value) => {
              if (value.weekDays.includes(activeDay)) {
                renderedCount++;
                return (<div key={value.id} className={value.peculiarity?"transport__item transport__item_special":"transport__item"}><p className='transport__itemTime'>{value.departureTime + ' - ' + value.arrivalTime}</p><p className='transport__itemText'>{value.peculiarity || value.description||''}</p></div>)
              }
            })}
{renderedCount==0?<p className='transport__error'>Рпсписание не найдено</p>:<></>}

          </div>
        </div></div>
    );
  } else {
    return( <div className="conteiner">
      <div className="transport ">
      <div  className="transport__cross skeleton" />
          <div className="transport__header">
            <div className="transport__iconBox skeleton">
             <div id='busIcon skeleton'></div>
            </div>
                
            <div className="transport__textBox">
              <p className="transport__name skeleton"></p>
              <p className="transport__type skeleton"></p>
            
            </div>
          <div className="transport__like skeleton"></div>
           
          </div>
      <div className="transport__days">{
        weekDays.map((day,index) => {
          return (<div key={index}
            className='transport__day skeleton'></div>)
          })
        }</div>
          <div className="transport__list">
          <div className="transport__item skeleton"></div>
          <div className="transport__item skeleton"></div>
          <div className="transport__item skeleton"></div>
          <div className="transport__item skeleton"></div>
          <div className="transport__item skeleton"></div>
          <div className="transport__item skeleton"></div>
</div>
        </div>
    </div>)
  }
}
)
