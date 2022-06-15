import React from 'react';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';
import FetchData from '../services/fetchData-service';


const Search = () => {
    const [movies,setMovies] = React.useState<any[] | undefined>(undefined);
    const [details,setDetails] = React.useState("popular");
    const [totalPages,setTotalPages] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(0);
    const [isDetails,setIsDetails] = React.useState(true);

    React.useEffect(() => {
        if(isDetails){
            FetchData.getMovies(details,pageCount+1).then((res) => {
                setMovies(res.results);
                setTotalPages(res.total_pages);
            });
        }
    },[details,pageCount]);

    function handlePageClick(e:any){
        console.log(e.selected);
        setPageCount(e.selected);
    }

    return (
            <div className="container">
                <SearchBar setDetails={setDetails} setMovies={setMovies} setIsDetails={setIsDetails} setTotalPages = {setTotalPages} pageCount={pageCount} isDetails={isDetails} setPageCount = {setPageCount}/>
                <div className='movieContainer'>
                    {movies?(movies.length != 0?movies.map((movie) => <Movie key={movie.id} movie={movie}/>): <div>Aucun resultat</div>): <div>chargement</div>}
                </div>
                <div className="pages">
                    <ReactPaginate
                    nextLabel="Next"
                    previousLabel="Previous"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages > 500 ? 500:totalPages}
                    breakLabel="..."
                    breakLinkClassName = "pageLink"
                    pageLinkClassName="pageLink"
                    pageClassName="pageItem"
                    activeClassName="active"
                    forcePage = {pageCount}
                    previousClassName="pageItem"
                    previousLinkClassName="pageLink"
                    nextClassName="pageItem"
                    nextLinkClassName="pageLink"
                    containerClassName="paginationContainer"
                    activeLinkClassName="active"
                    />
                </div>
            </div>
    );
};

export default Search;