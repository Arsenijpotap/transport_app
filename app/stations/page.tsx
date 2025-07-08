'use client'
import SearchInput from "@/components/Search/Search"
import useStationStore from "@/store/useStationStore"
import { Star } from "lucide-react"
import './stations.scss'
import { memo, useEffect } from "react"
import useAppStore from "@/store/useAppStore"
import cities from "@/constants/cities"
import useUserStore from "@/store/useUserDataStore"

const Stations = memo(() => {
    const searchText = useStationStore(state => state.searchText)
    const userRegion = useUserStore(state => state.region)
    const favoriteStationsList = useUserStore(state => state.favoriteStationsList)
    const toggleFavoriteStationsList = useUserStore(state => state.toggleFavoriteStationsList)
    const setSearchText = useStationStore(state => state.setSearchText)
    const isStationFavoriteActive = useStationStore(state => state.isStationFavoriteActive)
    const changeStationFavoriteActive = useStationStore(state => state.changeStationFavoriteActive)
    const data = useAppStore(state => state.data)
    const setData = useAppStore(state => state.setData)
  const path= '/api/stations/' + cities[userRegion]

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
          }
      }, []);
    
    
    
    
    let citiesList = Object.keys( Object.groupBy(data, ({ startingPoint }) =>
        startingPoint.name
    ))
    let renderedCount=0
    return (  
        <div className="conteiner">
            <div className="stations">
                <div className="stations__header">
                 
            <SearchInput value={searchText} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
                    }}></SearchInput>

<button onClick={() => {
                   let button = document.getElementById('star')
                   if (button) {
                     button.style.pointerEvents = 'none'
                     let timeout = setTimeout(() => {
                       button.style.pointerEvents = ''
                       clearTimeout(timeout)
                     },200)
            }
            changeStationFavoriteActive()
                }} id='star' className={isStationFavoriteActive ? 'stations__button_active stations__button' : 'stations__button'}><Star className='stations__icon' size={40}></Star></button>
          
                </div>
                <div className="stations__list">
                    {citiesList.map((city) => {
                        const isFavorite = favoriteStationsList.includes(city)

                        console.log(renderedCount)
                        if (isFavorite && isStationFavoriteActive || !isStationFavoriteActive) {
                            renderedCount++
                            return (<div className="stations__item">{city}
                        
                                <button id='like' className='stations__like' onClick={() => {
                                    let button = document.getElementById('like')
                                    if (button) {
                                        button.style.pointerEvents = 'none'
                                        let timeout = setTimeout(() => {
                                            button.style.pointerEvents = ''
                                            clearTimeout(timeout)
                                        }, 300)
                                    }
                                    toggleFavoriteStationsList(city)
                                }}>
                                    <Star className={isFavorite ? 'stations__likeIcon stations__likeIcon_active' : "stations__likeIcon"} fill={isFavorite ? '#dca430' : "#ffffff"} size={28}></Star>
                                </button></div>)

                        
                        }
                        if (renderedCount == 0) {
                            return (<p className="stations__error">dfg</p>
                            )
                        }
                            
})}
                </div>
            </div>
        </div>
);
})
 
export default Stations;