const Filters = ({ searchValue, handleSearch }) => {
    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={handleSearch} value={searchValue} />
        </>
    )
}
export default Filters
