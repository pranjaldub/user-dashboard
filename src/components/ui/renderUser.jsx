import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Card from "./card";
import Styles from "../ui/card.module.css";
// function Paginate({ itemsPerPage, items }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//     console.log(pageCount);
//   }, [itemsPerPage, itemOffset]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };
function RenderUsers({ currentItems }) {
  return (
    <>
      {console.log(currentItems)}
      <ul className={Styles.cards}>
        {currentItems.map((user) => {
          return <Card userData={user} key={user.email}></Card>;
        })}
      </ul>
    </>
  );
}

export default RenderUsers;
