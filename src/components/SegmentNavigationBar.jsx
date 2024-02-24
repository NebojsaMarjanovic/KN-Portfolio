import React from 'react';
import { Link } from 'react-router-dom';

function SegmentNavigationBar() {


  return (
      <div className="secondary-nav">
      <Link
          to={{
          pathname: "KN-Portfolio/witcher",
        }}
        >
          Witcher
        </Link>
        <Link
          to={{
          pathname: "KN-Portfolio/sword",
          
        }}
        >
          Sword
        </Link>
        <Link
          to={{
          pathname: "KN-Portfolio/cake",
        }}
        >
          Cake
        </Link>
        <Link
          to={{
          pathname: "KN-Portfolio/drake",
        }}
        >
          Dragon
        </Link>

      </div>
  );
}

export default SegmentNavigationBar;
