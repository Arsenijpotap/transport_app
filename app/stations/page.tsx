'use client'
import SearchInput from "@/components/Search/Search"
import useStationStore from "@/store/useStationStore"

const Stations = () => {
    const searchText= useStationStore(state =>state.searchText)
    const setSearchText = useStationStore(state => state.setSearchText)
    return (  
        <div className="conteiner">
            <div className="stations">
                <div className="station__header">
                    ssdf
            <SearchInput value={searchText} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
                    }}></SearchInput>
                </div>
            </div>
        </div>
);
}
 
export default Stations;