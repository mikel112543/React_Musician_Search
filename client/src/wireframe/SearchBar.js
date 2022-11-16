import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";

export const SearchBar = ({setSearchQuery}) => {
    const [textInput, setTextInput] = useState("")
    return (
        <div style={{background: "white", borderColor: "white", borderRadius: 10}}>
            <TextField
                id="search-bar"
                style={{background: "white", width: 400,borderRadius: 10}}
                className="text"
                onInput={(e) => {
                    setTextInput(e.target.value);
                }}
                placeholder="Search..."
                size="small"
                onKeyDown={event => {
                    if(event.key === "Enter") {
                        setSearchQuery(textInput)
                    }
                }}
            />
            <IconButton aria-label="search" onClick={() => {
                setSearchQuery(textInput)
            }}>
                <SearchIcon style={{fill: "blue"}}/>
            </IconButton>
        </div>
    )
}