'use client'
import SearchInput from "@/components/Search/Search"
import useStationStore from "@/store/useStationStore"
import { Star } from "lucide-react"
import './stations.scss'

const Stations = () => {
    const searchText= useStationStore(state =>state.searchText)
    const setSearchText = useStationStore(state => state.setSearchText)
    const isStationFavoriteActive = useStationStore(state => state.isStationFavoriteActive)
    const changeStationFavoriteActive = useStationStore(state => state.changeStationFavoriteActive)
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
            </div>
        </div>
);
}
 
export default Stations;