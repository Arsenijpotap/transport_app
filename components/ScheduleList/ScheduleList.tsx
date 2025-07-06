import { memo, useEffect } from 'react';
import './ScheduleList.scss'
import useAppStore from '@/store/useAppStore';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import useBusStore from '@/store/useBusStore';
import useUserStore from '@/store/useUserDataStore';
import Fuse from 'fuse.js';
import cities from '@/constants/cities';
import ScheduleItemSkeleton from '../ScheduleItem/SheduleItemSkeleton';
let includeFiltersMode = 0
const ScheduleList = memo(() => {
  const data = useAppStore(state => state.data)
 
  const setData = useAppStore(state => state.setData)
  const activeList = useBusStore(state => state.activeList)
  const isDirectionToCity = useBusStore(state => state.isDirectionToCity)
  const userRegion = useUserStore(state => state.region)
  const favoriteList = useUserStore(state => state.favoriteList)
  const isBusFavoriteActive = useBusStore(state => state.isBusFavoriteActive)
  const searchText = useBusStore(state => state.searchText)
  let changedData = data.map((obj) => {
    return({...obj,searchText:obj.startingPoint.name+' '+obj.finalPoint.name+' '+obj.startingPoint.shortName+'-'+obj.finalPoint.name+' '+obj.finalPoint.name+' '+obj.startingPoint.name+' '+obj.finalPoint.shortName+'-'+obj.startingPoint.name})
  })
  const fuseOptions = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.25,
    keys: ["startingPoint.name",
      'finalPoint.name',
      'startingPoint.shortName',
      'finalPoint.shortName',
      'searchText'
    ],
  }
  const fuse = new Fuse(changedData, fuseOptions);
  const results = fuse.search(searchText);
  const items = results.map((result) => ({ ...result.item, score:result.score }));
  let searchedData=searchText?items:data
const isSearchActive = searchText.replaceAll(' ','')!=''
  let renderedCount = 0;
  const path= '/api/transport/' + cities[userRegion]
  useEffect(() => {
    if(data.length == 0 || data.toString().includes('error')) {
   fetch(path)
        .then((res) => res.json())
        .then((res) => {
          if (!JSON.stringify(res).includes('error')) {
            setData(res)
          }
        })
        .catch(console.error);
    } }, []);
  let namedData = searchedData.map((value) => {
    const firstName=value.startingPoint.shortName ||value.startingPoint.name
    const secondName=value.finalPoint.shortName ||value.finalPoint.name
    const fullName=firstName+' - '+secondName
    return({id:value.id,type:value.type,name:fullName,startingPointId:value.startingPointId,finalPointId:value.finalPointId,startingPoint:value.startingPoint,finalPoint:value.finalPoint, weekDays:value.weekDays,peculiarity:value.peculiarity,departureTime:value.departureTime,arrivalTime:value.arrivalTime})
  })
  let groupedData = Object.groupBy(namedData, ({ name ,type }) => 
    `${name} ${type}`
  );
  let groupedDataValues = Object.values(groupedData)
  
  if (Object.keys(data).length == 0) {
    return (<div className="conteiner"><div className="scheduleList">
<ScheduleItemSkeleton></ScheduleItemSkeleton>
<ScheduleItemSkeleton></ScheduleItemSkeleton>
{/* <ScheduleItemSkeleton></ScheduleItemSkeleton> */}

    </div></div>)
  }else return (<div className="conteiner">
      <div className="scheduleList">
        {groupedDataValues.sort((a, b) => {
          if (!a || !b) return 0;
  
          const aName = isDirectionToCity
            ? a[0].startingPoint.shortName || a[0].startingPoint.name
            : a[0].finalPoint.shortName || a[0].finalPoint.name;
           
          const bName = isDirectionToCity
            ? b[0].startingPoint.shortName || b[0].startingPoint.name
            : b[0].finalPoint.shortName || b[0].finalPoint.name;
           
          return aName.localeCompare(bName);
        
     }).map((value, index) => {
       if (value) {
         if (includeFiltersMode == 1 && isSearchActive || !isSearchActive) {
           const name = isDirectionToCity ? value[0].startingPoint.shortName || value[0].startingPoint.name : value[0].finalPoint.shortName || value[0].finalPoint.name
           const isFavorite = favoriteList.indexOf(name + '&' + value[0].type) != -1
           let newList = activeList.map(e => e.toString().toLowerCase())
           if (newList.indexOf(value[0].type.toString().toLowerCase()) != -1) {
             if ((isDirectionToCity && (value[0].finalPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase()) != -1)) || (!isDirectionToCity && (value[0].startingPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase()) != -1))) {
               if (isFavorite && isBusFavoriteActive || !isBusFavoriteActive) {
                 renderedCount++
                 return (<ScheduleItem key={index} data={value}></ScheduleItem>)
               }
             }
           }
         } else if (includeFiltersMode == 0 && isSearchActive || !isSearchActive) {
           renderedCount++
           return (<ScheduleItem key={index} data={value}></ScheduleItem>)
         } else if (includeFiltersMode == 2 && isSearchActive || !isSearchActive) {
           if ((isDirectionToCity && (value[0].finalPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase()) != -1)) || (!isDirectionToCity && (value[0].startingPoint.name.toString().toLowerCase().indexOf(userRegion.toLowerCase()) != -1))) {
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
})
 
export default ScheduleList;