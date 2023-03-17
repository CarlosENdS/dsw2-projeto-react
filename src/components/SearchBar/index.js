import './SearchBar.css';
import searchIcon from "../../assets/iconmonstr-magnifier-lined-24.png";

const SearchBar = ({ placeholder }) => {
    return (
        <div className="header-content-container">
            <div className="searchbar">
                <input type="text" id="searchbar-main-content" placeholder={placeholder} />
                <label htmlFor="searchbar-main-content">
                    <img src={searchIcon} alt="" />
                </label>
            </div>
            <button>
                Opções
            </button>
        </div>
    )
}

export default SearchBar;