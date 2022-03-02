import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  const tileSample = props.data.map((contact, index) => Tile(contact));	

  return (
    <div>
      {tileSample}
    </div>
  );
};
