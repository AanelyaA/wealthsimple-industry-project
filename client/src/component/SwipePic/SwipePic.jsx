import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable';

const SwipeablePage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  };

  const handleSwipeRight = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 0));
  };

  const maxPage = 3; // Assuming you have 4 pages (0-indexed)

  return (
    <Swipeable onSwipedLeft={handleSwipeLeft} onSwipedRight={handleSwipeRight}>
      <div className="container">
        <img className="image" src={`image${currentPage + 1}.jpg`} alt={`Image ${currentPage + 1}`} />
      </div>
    </Swipeable>
  );
};

export default SwipeablePage;
