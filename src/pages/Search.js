import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';

const Search = () => {
    const [movies,setMovies] = React.useState([]);
    const [details,setDetails] = React.useState("popular");
    const [totalPages,setTotalPages] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(0);
    const [isDetails,setIsDetails] = React.useState(true);

    React.useEffect(() => {
        if(isDetails){
            axios.get('https://api.themoviedb.org/3/movie/'+ details +'?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US&page=' + (pageCount+1).toString()).then((res) => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
            });
        }
    },[details,pageCount]);

    function handlePageClick(e){
        console.log(e.selected);
        setPageCount(e.selected);
    }
    return (
        <div className='main'>
        <header>
            <Header/>
        </header>
        <section>
            <div className="container">
                <SearchBar setDetails={setDetails} setMovies={setMovies} setIsDetails={setIsDetails} setTotalPages = {setTotalPages} pageCount={pageCount} isDetails={isDetails} setPageCount = {setPageCount}/>
                <div className='movieContainer'>
                    {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
                </div>
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
        </section>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default Search;