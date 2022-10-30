import React from 'react';
import FetchData from '../services/fetchData-service';

const DetailsSearch = () => {
    const [genres,setGenres] = React.useState<any[]>([]);

    function inputChange(){
        let buttonDropdown = document.getElementsByClassName("dropdown-label")?.[0];
        let input:any[] = [...Array.from(document.getElementsByClassName("inputCheckbox"))];
        const selected = input.filter((inp) => inp.checked).length;
        if(selected == 0){
            buttonDropdown.innerHTML = "None"
            buttonDropdown.classList.remove("overflowText")
        }
        else if(selected == input.length){
            buttonDropdown.innerHTML = "All selected"
        }
        else{
            buttonDropdown.innerHTML = selected.toString() + " selected"
            buttonDropdown.classList.add("overflowText")
        }
    }

    React.useEffect(() => {
        FetchData.getMoviesGenre().then((res) => {
            let genresApi = res.genres;
            let genres:any[] = [];
            genresApi.map((i:any) => {
                genres.push(<label key={i.id} className="dropdown-option">
                <input className='inputCheckbox' type="checkbox" name="dropdown-group" value={i.id} onChange={inputChange}/>
                <div className='nn'>{i.name}</div>
                </label>);
            });
            setGenres(genres);
        });
    },[]);

    let open = false;
    let checkAll = false;
    React.useEffect(() => {
        let input:any[] = [...Array.from(document.getElementsByClassName("inputCheckbox"))];
        let buttonDropdown = document.getElementsByClassName("dropdown-label")?.[0];
        
        buttonDropdown.addEventListener("click",(e) =>{
            let dropdown = document.getElementsByClassName("dropdown")?.[0];
            if(open){
                open = false;
                dropdown.classList.remove("on");
            }
            else{
                open = true;
                dropdown.classList.add("on");
            }
        });
        let checked = document.getElementsByClassName("checked")?.[0];
        checked.addEventListener("click",(e) =>{
            if(checkAll){
                checked.innerHTML = "Check all"
                checkAll = false;
                input.forEach((inp) => inp.checked = false);
            }
            else{
                checked.innerHTML = "Uncheck all"   
                checkAll = true;
                input.forEach((inp) => inp.checked = true);
            }
            inputChange();
        });    
    });
    

    const years = []
    years.push(<option key = "0" value="">none</option>)
    for(let i = 1950;i<2023;i++){
        years.push(<option key = {i} value={i.toString()}>{i.toString()}</option>)
    }

    return (
        <div className='detailsSearch'>
            <div className="nameDetails"><span> years : </span>
            <form>
                <label>
                <div className="multiselect">
                    <div className="selectBox" >
                    <select id = "years" defaultValue={''}>
                        {years}
                    </select>
                    </div>
                </div>
            </label>
            </form>
            </div>
            <div className="nameDetails"> <span> adults : </span> 
                <form>
                    <div className="multiselect">
                        <div className="selectBox" >
                        <select id = "adults" defaultValue="false">
                            <option key = "100" value="true">true</option>
                            <option key = "1000" value="false">false</option>
                        </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className="nameDetails">
                <span>genres : </span>

                <div className="dropdown" >
                    <label className="dropdown-label">None</label>
                    <div className="dropdown-list">
                        <a href="#" className="dropdown-option checked">
                        Check All  
                        </a>
                        {genres}  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSearch;