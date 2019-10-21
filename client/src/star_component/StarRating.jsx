import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ starCount = 0 }) => {
  const stars = [];
  const buildIcons = (iconCount = 0, iconType = '', icons = []) => {
    for (let i = 0; i < iconCount; i += 1) {
      icons.push({ iconType, id: iconType + i.toString() });
    }
  };

  if (starCount >= 0 && starCount <= 5) {
    const fullStarCount = Math.floor(starCount);
    const renderPartialStar = !Number.isInteger(starCount);
    const remainingStars = 5 - fullStarCount - Number(renderPartialStar);
    const emptyStarCount =
      remainingStars > 0 && remainingStars <= 5 ? remainingStars : 0;
    buildIcons(fullStarCount, 'star', stars);
    if (renderPartialStar) {
      buildIcons(1, 'star_half', stars);
    }
    buildIcons(emptyStarCount, 'star_border', stars);
  }

  const starIcons = stars.map(({ iconType, id }) => (
    <i key={id} className="material-icons">
      {iconType}
    </i>
  ));
  return <span className="star-rating">{starIcons}</span>;
};

StarRating.propTypes = {
  starCount: PropTypes.number.isRequired,
};

export default StarRating;

// import React from "react";

// class Star extends React.Component {
//   render() {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//       >
//         {/* <path d="M0 0h24v24H0z" fill="none" /> */}
//         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//         {/* <path d="M0 0h24v24H0z" fill="none" /> */}
//       </svg>
//     );
//   }
// }

// export default Star;
