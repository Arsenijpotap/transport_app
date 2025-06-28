import { useEffect } from 'react';
import './ScheduleList.scss'
import useAppStore from '@/store/useAppStore';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import useBusStore from '@/store/useBusStore';
import useUserStore from '@/store/useUserData';
const ScheduleList = () => {
const data = useAppStore(state=>state.data)
  const setData = useAppStore(state => state.setData)
  const activeList = useBusStore(state => state.activeList)
  const isDirectionToCity = useBusStore(state => state.isDirectionToCity)
  const userRegion = useUserStore(state => state.region)
  
  let renderedCount = 0;
  
    useEffect(() => {
        const params = new URLSearchParams({
          condition:''
        });
        fetch(`/api/transport/`)
          .then((res) => res.json())
          .then((res) => {
            setData(res)
          })
          .catch(console.error);
    }, []);
  let namedData = data.map((value) => {
    const firstName=value.startingPoint.shortName ||value.startingPoint.name
    const secondName=value.finalPoint.shortName ||value.finalPoint.name
    const fullName=firstName+' - '+secondName
    return({id:value.id,type:value.type,name:fullName,startingPoint:value.startingPoint,finalPoint:value.finalPoint, weekDays:value.weekDays,peculiarity:value.peculiarity,departureTime:value.departureTime,arrivalTime:value.arrivalTime})
  })
let groupedData = Object.groupBy(namedData, ({ name ,type }) => 
  `${name} ${type}`
  );

  
    return (<div className="conteiner">
      <div className="scheduleList">
     {  Object.values(groupedData).map((value, index) => {
          if (value) {
            let newList = activeList.map(e=>e.toString().toLowerCase())
            if (newList.indexOf(value[0].type.toString().toLowerCase()) != -1) {
              console.log(value[0].finalPoint.toString().toLowerCase(),userRegion.toLowerCase() )
              if ((isDirectionToCity&&(value[0].finalPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase())!=-1))||(!isDirectionToCity&&(value[0].startingPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase())!=-1))) {
                renderedCount++
                return (<ScheduleItem key={index} data={value}></ScheduleItem>)
              }
            }
      
          }
     
        })
        }
        {renderedCount === 0 ? (<p className='scheduleList__error'>Нет подходящего транспорта</p>):<></>}
        

        </div>
    </div>  );
}
 
export default ScheduleList;