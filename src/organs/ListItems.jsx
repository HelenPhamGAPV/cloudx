import * as React from "react";
// import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Card from "../atoms/Card"

const ListItems = ({ list }) => {
  return (
    <div class="w-full bg-white100 px-5 pb-8 pt-16 lg:pb-16 lg:pt-20">
      <div class="mx-auto grid w-full max-w-6xl gap-x-12 gap-y-20 sm:justify-center xl:grid-cols-3">
        {list.map((item, index) => (
            <Card content={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
