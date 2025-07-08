import { Bus, BusFront, Star } from 'lucide-react';
import './ScheduleItem.scss'
import getDaysArray from '@/utils/getDaysArray';
import getSchedule from '@/utils/getSchedule';
import { Point } from '@/store/useAppStore';
import useUserStore from '@/store/useUserDataStore';
import useBusStore from '@/store/useBusStore';
import { memo } from 'react';
import Link from "next/link";
export interface ScheduleItem {
    id: number;
    type: "Bus" | "TaxiBus";
    name: string;
    startingPoint: Point;
    finalPoint: Point;
    weekDays: string;
    peculiarity: string | null;
    departureTime: string;
    arrivalTime: string;
    startingPointId: number;
    finalPointId: number;
  }
  
  interface ItemProps {
    data: ScheduleItem[]; 
}
const ScheduleItem = memo(({ data }: ItemProps) => {
    const favoriteList = useUserStore(state => state.favoriteBusList)
  let isFavorite = false
    const userRegion = useUserStore(state => state.region)
    const params = new URLSearchParams({
        startingPointId:data[0].startingPointId.toString(),
        finalPointId:data[0].finalPointId.toString(),
        type:data[0].type.toString()
          });
  

  
    const name = data[0].startingPoint.name.toLowerCase() != userRegion ? data[0].startingPoint.shortName || data[0].startingPoint.name : data[0].finalPoint.shortName || data[0].finalPoint.name
    isFavorite = favoriteList.indexOf(name + '&' + data[0].type) != -1

    const toggleFavoriteList = useUserStore(state => state.toggleFavoriteBusList)
    let scheduleList = getSchedule(data)

    return (<div className="scheduleItem">
        <div className="scheduleItem__header">
        <Link  href={"transport/transport?"+params} >
            <div className="scheduleItem__iconBox">
{data[0].type =='Bus'?<BusFront id='busIcon' size={31}></BusFront >:<Bus id='taxiBusIcon' size={31}></Bus>}
                </div>
                </Link>
        <Link  href={"transport/transport?"+params} >
                
            <div className="scheduleItem__textBox">
                <p className="scheduleItem__name">{data[0].name}</p>
                <p className="scheduleItem__type">{data[0].type=='Bus'?'Автобус':"Маршрутное такси"}</p>
            
                </div>
                </Link>
            <button id='like' className='scheduleItem__like' onClick={() => {
                    let button = document.getElementById('like')
                    if (button) {
                      button.style.pointerEvents = 'none'
                      let timeout = setTimeout(() => {
                        button.style.pointerEvents = ''
                        clearTimeout(timeout)
                      },200)
             }
              toggleFavoriteList(name+'&'+data[0].type)
            }}>
                <Star className={isFavorite?'scheduleItem__likeIcon scheduleItem__likeIcon_active':"scheduleItem__likeIcon"} fill={isFavorite?'#dca430':"#ffffff"} size={28}></Star>
            </button>
        </div><Link href={"transport/transport?"+params} >
        <div className="scheduleItem__timeList">
{scheduleList.map((time,index) => {
    return (
        <div key={index} className={time.indexOf('*') != -1 ? "scheduleItem__timeItem scheduleItem__timeItem_active":"scheduleItem__timeItem"}><p className='scheduleItem__timeText'>{parseFloat(time).toFixed(2).toString().replace('.',':')}</p></div>)
    })}

        </div>
    </Link>
    </div>
      );
}
)
export default ScheduleItem;