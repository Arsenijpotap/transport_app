

import { ArrowRightLeft, Bus, BusFront, Star } from 'lucide-react';
import SearchInput from '../Search/Search';
import './TopPanel.scss'

import useBusStore from '@/store/useBusStore';

const TopPanel = () => {
    const isBusFavoriteActive = useBusStore(state=>state.isBusFavoriteActive)
    const changeBusFavoriteActive = useBusStore(state => state.changeBusFavoriteActive)
    const activeList = useBusStore(state=>state.activeList)
    const toggleActiveList = useBusStore(state => state.toggleActiveList)
    const toggleDirection = useBusStore(state => state.toggleDirection)
    const isDirectionToCity = useBusStore(state => state.isDirectionToCity)
   
 
    
    return (<div className="conteiner">
        <div className="topPanel">
            <SearchInput></SearchInput>
            <div  className="topPanel__buttonBar">
                <button onClick={() => {
                  toggleActiveList('bus')
                }} id='bus' className={activeList.indexOf('bus')!=-1 ? 'topPanel__button_active topPanel__button' : 'topPanel__button'}><BusFront className='topPanel__icon' size={44}></BusFront></button>
                <button onClick={() => {
                  toggleActiveList('taxiBus')
                }} id='taxiBus'  className={activeList.indexOf('taxiBus')!=-1  ? 'topPanel__button_active topPanel__button' : 'topPanel__button'}><Bus className='topPanel__icon' size={44}></Bus></button>
          <button onClick={() => {
            let button = document.getElementById('arrow')
            if (button) {
              button.style.pointerEvents = 'none'
              let timeout = setTimeout(() => {
                button.style.pointerEvents = ''
                clearTimeout(timeout)
              },200)
            }
            toggleDirection()
                }} id='arrow' className={isDirectionToCity?'topPanel__button topPanel__button_active':'topPanel__button topPanel__button_active topPanel__button_reverse'}><ArrowRightLeft className='topPanel__icon' size={44}></ArrowRightLeft></button>
                <button onClick={() => {
                   let button = document.getElementById('star')
                   if (button) {
                     button.style.pointerEvents = 'none'
                     let timeout = setTimeout(() => {
                       button.style.pointerEvents = ''
                       clearTimeout(timeout)
                     },200)
            }
            changeBusFavoriteActive()
                }} id='star' className={isBusFavoriteActive ? 'topPanel__button_active topPanel__button' : 'topPanel__button'}><Star className='topPanel__icon' size={44}></Star></button>
            </div>
        </div>
    
    </div>);
}
 
export default TopPanel;