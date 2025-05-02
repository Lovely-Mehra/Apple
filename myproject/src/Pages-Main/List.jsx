import React from "react";
// import "./List.css"; // Importing CSS file
import { Link } from "react-router-dom";


const List = () => {
  return (
    <div className="list-container">
      <ul className="cateul">
      <li>
          <div className="im" style={{width:"100px"}}>
           
          </div>
         
        </li>
     <Link to = "/maclist" className="a-list">
        <li>
          <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502780055"
              alt=""
            />
          </div>
          
          Mac
        </li>
        </Link>
       <Link to="/iphonelist"  className="a-list">
        <li>
          <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=1738706422726"
              alt=""
            />
          </div>
          iPhone
        </li>
        </Link>

        <Link to="/ipadlist" className="a-list">
        <li>
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875"
              alt=""
            />
          </div>

          iPad
          </li>
          </Link>
          <Link to="/watchlist" className="a-list">
        <li>
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838"  
              alt=""
            />
          </div>
          
          Apple Watch
          
          </li>
          </Link>

         <Link to="airpodslist" className="a-list">
        <li>
          
          <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822"
              alt=""
            />
          </div>
          
          AirPods
          </li>
          </Link>

          <Link to="airtaglist" className="a-list">
        <li> 
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
              alt=""
            />
      
          </div>
          AirTag
          </li>
          </Link>

          <Link to="appletvlist" className="a-list">
        <li>
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
              alt=""
            />
          </div>
          
          Apple TV 4K
          </li>
          </Link>

          <Link to="/homepodlist" className="a-list">
        <li>
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
              alt=""
            />
          </div>
          
          HomePod
          </li>
          </Link>

          <Link to="/accessorieslist" className="a-list">
        <li>
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502322543"
              alt=""
            />
          </div>
          
          Accessories</li>

          <li>
          <div className="im" style={{width:"10px"}}>
           
          </div>
         
        </li>
        </Link>



      </ul>
    </div>
  );
};

export default List;
