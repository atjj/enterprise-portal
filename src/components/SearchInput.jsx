

const SearchInput = ({searchInput,handleSearchInput}) => {
  return (
    <input 
        type = "text"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder = "поиск...."
        className = "border-1 border-black px-[10px] py-[2px] text-[17px] mt-[30px] w-[280px]"
    />
  )
}

export default SearchInput