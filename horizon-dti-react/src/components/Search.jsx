import { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchQuery);
      alert(`Search functionality for "${searchQuery}" would be implemented here.`);
    }
  };

  return (
    <div className="search-component">
      <button 
        className="search-toggle" 
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        aria-label="Search"
      >
        🔍
      </button>
      
      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search programs, pages, resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                autoFocus
              />
              <button type="submit" className="search-submit">Search</button>
              <button 
                type="button" 
                className="search-close"
                onClick={() => setIsSearchOpen(false)}
              >
                ✕
              </button>
            </form>
            <div className="search-suggestions">
              <p className="suggestions-title">Popular Searches:</p>
              <ul className="suggestions-list">
                <li onClick={() => { setSearchQuery('A1 course'); setIsSearchOpen(false); }}>A1 course</li>
                <li onClick={() => { setSearchQuery('Goethe exam'); setIsSearchOpen(false); }}>Goethe exam</li>
                <li onClick={() => { setSearchQuery('Virtual learning'); setIsSearchOpen(false); }}>Virtual learning</li>
                <li onClick={() => { setSearchQuery('Pricing'); setIsSearchOpen(false); }}>Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
