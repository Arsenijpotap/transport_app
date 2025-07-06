import { memo } from 'react';
import './Search.scss';
import { Search } from 'lucide-react';
import useBusStore from '@/store/useBusStore';

interface SearchInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = memo(({ value, handleChange }: SearchInputProps) => {
  

    return (
        <div className="search">
            <Search className='search__image' strokeWidth='3' size={30} absoluteStrokeWidth />
            <input 
              value={value} 
              onChange={handleChange} 
              className='search__input'  
              type="text" 
              placeholder='Найти на странице...' 
            />
        </div>
    );
})

export default SearchInput;