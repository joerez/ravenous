import React from 'react';
import './SearchBar.css';

const sortByOptions = {
'Best Match': 'best_match',
'Highest Rated': 'rating',
'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption =>
      {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key="sortOptionValue">{sortByOption}</li>;
    })



  }
  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
  <ul><li key="best_match">Best Match</li><li key="rating">Highest Rated</li><li key="review_count">Most Reviewed</li></ul>
  </div>
  <div className="SearchBar-fields">
  <input placeholder="Search Businesses" />
  <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
  <a>Let&#39;s Go</a>
  </div>
  </div>
    )

  }
};

export default SearchBar;
