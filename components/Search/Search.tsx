import { memo } from 'react';
import './Search.scss';
import { Search } from 'lucide-react';
import useBusStore from '@/store/useBusStore';
const SearchInput = memo(() => {
    const searchText= useBusStore(state =>state.searchText)
    const setSearchText= useBusStore(state =>state.setSearchText)


    return (
        <div className="search">
            <Search className='search__image' strokeWidth='3' size={30}  absoluteStrokeWidth />
        <input value={searchText} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value)
        }} className='search__input'  type="text" placeholder='Найти на странице...' /></div>);
})
 
export default SearchInput;