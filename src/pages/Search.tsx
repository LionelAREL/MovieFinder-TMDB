import React from 'react';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';
import FetchData from '../services/fetchData-service';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import closeLogo from './../assets/close.svg'


const Search = () => {
    const [movies,setMovies] = React.useState<any[] | undefined>(undefined);
    const [details,setDetails] = React.useState("popular");
    const [totalPages,setTotalPages] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(0);
    const [isDetails,setIsDetails] = React.useState(true);
    const [showModal,setShowModal] = React.useState(false);
    const [movieVideo,setMovieVideo] = React.useState('');
    const [selectedMovie,setSelectedMovie] = React.useState<any>(null)
      
    function handleOpenModal(movieId: any){
        FetchData.getMoviesVideo(movieId).then((res) => {
            for(let result of res.results){
                if(result.site === "YouTube"){
                    setMovieVideo(result.key);
                    continue;
                }
                else{
                    setMovieVideo("");
                }
            }
        })
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    
    
    Modal.setAppElement('#root');  

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
            <div className="container" id='main'>
                <SearchBar setDetails={setDetails} setMovies={setMovies} setIsDetails={setIsDetails} setTotalPages = {setTotalPages} pageCount={pageCount} isDetails={isDetails} setPageCount = {setPageCount}/>
                
                <ReactModal 
                isOpen={showModal}
                contentLabel="Movie detail"
                onRequestClose={handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className='close' onClick={handleCloseModal}><img src={closeLogo} alt="" /></div>
                <div className='posterContainer'>
                    <img className='poster' src={selectedMovie?.poster_path ? "https://image.tmdb.org/t/p/w500/" + selectedMovie.poster_path : ""} alt="" />
                </div>
                <div className='details'>
                    <div className='title'>{selectedMovie?.title}</div>
                    <div className='synopsis'>Synopsis : {selectedMovie?.overview}</div>
                </div>
                <div className='youtubeContainer'>
                    {movieVideo ? <iframe className='youtube' src={"https://www.youtube.com/embed/" + movieVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : ""}
                </div>

                </ReactModal>

                <div className='movieContainer'>
                    {movies?(movies.length != 0?movies.map((movie) => <Movie onClick={() => {handleOpenModal(movie.id);setSelectedMovie(movie)}} setSelectedMovie={setSelectedMovie} handleOpenModal={handleOpenModal} key={movie.id} movie={movie}/>): <div>Aucun resultat</div>): <div>chargement</div>}
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