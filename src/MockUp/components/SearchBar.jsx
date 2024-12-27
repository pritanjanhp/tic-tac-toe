import React, { Fragment } from 'react'

const SearchBar = () => {
    return (
        <Fragment>
            <h1>SearchBar</h1>
            <form>
                <input type='text' placeholder='searchBar....' /> <br />
                <label >
                    <input type='checkbox' /> only show producet of stock
                </label>
            </form>
        </Fragment>
    )
}

export default SearchBar