import React from 'react';
import { Link } from 'react-router-dom';

function SegmentNavigationBar() {


  return (
      <div className="secondary-nav">
      <Link
          to={{
          pathname: "/witcher",
        }}
        >
          Witcher
        </Link>
        <Link
          to={{
          pathname: "/sword",
          
        }}
        >
          Sword
        </Link>
        <Link
          to={{
          pathname: "/cake",
        }}
        >
          Cake
        </Link>
        <Link
          to={{
          pathname: "/drake",
        }}
        >
          Dragon
        </Link>

      </div>
  );
}

export default SegmentNavigationBar;
