import { Bus, BusFront, Star } from 'lucide-react';
import './ScheduleItem.scss'
import getDaysArray from '@/utils/getDaysArray';
import getSchedule from '@/utils/getSchedule';
export interface ScheduleItem {
    id: number;
    type: "Bus" | "TaxiBus";
    name: string;
    peculiarity: string | null;
    departureTime: string;
    arrivalTime: string;
    weekDays:string
  }
  
  interface ItemProps {
    data: ScheduleItem[]; 
}
const ScheduleItem = ({ data }: ItemProps) => {
    let scheduleList=getSchedule(data)
    return (<div className="scheduleItem">
        <div className="scheduleItem__header">
            <div className="scheduleItem__iconBox">
{data[0].type =='Bus'?<BusFront id='busIcon' size={31}></BusFront >:<Bus id='taxiBusIcon' size={31}></Bus>}
            </div>
            <p className="scheduleItem__name">{data[0].name }</p>
            <button className='scheduleItem__like'>
                <Star></Star>
            </button>
        </div>
        
        <div className="scheduleItem__timeList">
{scheduleList.map((time) => {
    return (
        <div className={time.indexOf('*') != -1 ? "scheduleItem__timeItem scheduleItem__timeItem_active":"scheduleItem__timeItem"}><p className='scheduleItem__timeText'>{parseFloat(time).toFixed(2).toString().replace('.',':')}</p></div>)
})}

        </div>
    </div>
      );
}
 
export default ScheduleItem;