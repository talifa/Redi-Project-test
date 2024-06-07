import React from "react";
import DebounceInput from 'react-debounce-input';
 
const SearchQuery = (props) => {
    return (

    <div>
            <DebounceInput
        value={props.value}
        type="text"
        debounceTimeout={300} 
        placeholder="Search for a movie..."
        onChange={(e) =>
          
            props.setSearchValue(e.target.value.toLowerCase())
        }
      />
    </div>
   

    
    );
};

export default SearchQuery;