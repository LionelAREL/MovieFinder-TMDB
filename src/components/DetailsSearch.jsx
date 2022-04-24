import React from 'react';

const DetailsSearch = () => {
    var expanded = -1;

    function showCheckboxes(i) {
        var checkboxes = document.getElementById("checkboxes" + i);
        if(expanded == -1){
            checkboxes.style.display = "block";
            expanded = i;
        }
        else if (expanded !== i) {
            var checkboxestemp = document.getElementById("checkboxes" + expanded);
            checkboxestemp.style.display = "none";
            checkboxes.style.display = "block";
            expanded = i;
        } 
        else if(i === expanded){
            checkboxes.style.display = "none";
            expanded = -1;
        }
    }

    const years = []
    years.push(<option key = "0" value="">none</option>)
    for(let i = 1950;i<2023;i++){
        years.push(<option key = {i} value={i.toString()}>{i.toString()}</option>)
    }
    return (
        <div className='detailsSearch'>
            <div className="nameDetails"><span> years : </span>
            <form>
                <div className="multiselect">
                    <div className="selectBox" >
                    <select id = "years">
                        {years}
                    </select>
                    </div>
                </div>
            </form>
            </div>
            <div className="nameDetails"> <span> adults : </span> 
            <form>
                <div className="multiselect">
                    <div className="selectBox" >
                    <select id = "adults" defaultValue={'false'}>
                        <option key = "100" value="true">true</option>
                        <option key = "1000" value="false" selected="selected">false</option>
                    </select>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default DetailsSearch;