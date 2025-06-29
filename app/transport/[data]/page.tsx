
'use client'
 
import cities from '@/constants/cities'
import useAppStore from '@/store/useAppStore'
import useUserStore from '@/store/useUserDataStore'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
export default function Transport(params:string) {
  const data = useAppStore(state => state.data)
  const setData = useAppStore(state => state.setData)
  const userRegion = useUserStore(state => state.region)

  const searchParams = useSearchParams()
 
  const type = searchParams.get('type')
  const startingPointId = searchParams.get('startingPointId')
  const finalPointId = searchParams.get('finalPointId')
      
  let groupedData = Object.groupBy(data, ({ finalPointId,startingPointId ,type }) => 
    type+'&'+startingPointId+'_'+finalPointId
);
useEffect(() => {
  if (data.length == 0) {

    const path= '/api/transport/'+cities[userRegion]
    fetch(path)
    .then((res) => res.json())
    .then((res) => {
      setData(res)
    })
    .catch(console.error);
  }
})

  let currentData =groupedData[  type+'&'+startingPointId+'_'+finalPointId]
  
  
  return (
    <>


    </>
  );
}

