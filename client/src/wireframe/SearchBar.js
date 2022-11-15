import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";

export const SearchBar = ({setSearchQuery}) => {
    const [textInput, setTextInput] = useState("")
    return (
        <form style={{background: "white",borderColor: "white", borderRadius: 10}}>
            <TextField
                id="search-bar"
                style={{background: "white", borderRadius: 10}}
                className="text"
                onInput={(e) => {
                    setTextInput(e.target.value);
                }}
                label="Search for an artist"
                placeholder="Search..."
                size="small"
            />
            <IconButton aria-label="search" onClick={() => {
                setSearchQuery(textInput)
            }}>
                <SearchIcon style={{fill: "blue"}}/>
            </IconButton>
        </form>
    )
}