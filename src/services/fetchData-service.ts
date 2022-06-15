class FetchData {

    static getMovies(details:string,page:number):Promise<any>{
        return fetch(`https://api.themoviedb.org/3/movie/${details}?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US&page=${page.toString()}`)
        .then(this.handleResponse)
        .catch(this.handleError);
    }

    static getMoviesGenre():Promise<any>{
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US`)
        .then(this.handleResponse)
        .catch(this.handleError);
    }
    static getMoviesDetails(search:string,pageCount:number,adult:string,years:string):Promise<any>{
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US&query=${search}&page=${(pageCount+1).toString()}&include_adult=${adult}${(years ? '&year=' + years:'')}`)
        .then(this.handleResponse)
        .catch(this.handleError);
    }



    static handleError(error: Error): null {
        console.error(error);
        return null;
    }
    static handleResponse(response: any): any {
        if (response.status >= 200 && response.status <= 299) {
            console.log(response);
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    }

}

export default FetchData;