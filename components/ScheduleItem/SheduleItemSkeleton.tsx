import './ScheduleItem.scss'


const ScheduleItemSkeleton = () => {
 
  return (<div className="scheduleItem">
    <div className="scheduleItem__header ">
   
            <div className="scheduleItem__iconBox skeleton">
            </div>
            <div className="scheduleItem__name skeleton"></div>
      <button className='scheduleItem__like skeleton' >
            </button>
        </div>
        <div className="scheduleItem__timeList ">

        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>
        <div className="scheduleItem__timeItem skeleton" ><p className='scheduleItem__timeText'></p></div>


        </div>
    
    </div>
      );
}

export default ScheduleItemSkeleton;