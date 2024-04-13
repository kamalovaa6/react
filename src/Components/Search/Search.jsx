export default function Search({ query, onChangeQuery }) {
    return (
        <>

            <div className="border stroke-black py-3 px-3 ">

                <label htmlFor="search"></label>
                <input className="outline-transparent"
                    value={query}
                    type="text"
                    name="search"
                    placeholder="Поиск"
                    onChange={(e) => onChangeQuery(e)}
                />


            </div>

        </>
    )
}