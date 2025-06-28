import { memo } from 'react';
import './Search.scss';
import { Search } from 'lucide-react';
const SearchInput = memo(() => {


    return (
        <div className="search">
            <Search className='search__image' strokeWidth='3' size={30}  absoluteStrokeWidth />
        <input className='search__input'  type="text" placeholder='Найти на странице...' /></div>);
})
 
export default SearchInput;