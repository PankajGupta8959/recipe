import React from "react";

const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return (
    <div className="jumbotron">
        <h1 className="display-2">
        <span className="material-icons brand-icon">breakfast_dining</span> Food Recipe</h1>
        <div className="input-group w-50 mx-auto">
        <input className="form-control " type="search" placeholder="Search Fav Recipes....." value={search}
        onChange={onInputChange} aria-label="Search"/>
        <div className="input-group-append">
        <button className="btn btn-dark" onClick={onSearchClick} type="submit">Search Recipes</button>
        </div>
        </div>
    </div>
    );
};
export default Header;