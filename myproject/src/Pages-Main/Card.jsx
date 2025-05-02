import React from "react";

//..............Card 1............. 


const Card = () => {
  return (
    <div  className="Card">
     
     <div class="rs-shop-subheader">
        
        <h1>
          <b id="bold">
            The latest. <></>
            <span id="cardheading1">
              Take a look at what's new right now.
            </span>
          </b>
        </h1>
      </div>
      <br />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="parent1">
              <div className="child">
                <div className="hp hp12">
                  <h2  id="cardheading">Apple Watch Series 10</h2>
                  <p id="para">Thinstant classic.</p>
                  <p>From ₹46900.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp">
                  <h2 id="cardheading">iPad Air</h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹59900.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1740783181594"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp hp3 ">
                  <h2 id="cardheading">iPhone 16 Pro</h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹119990.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp">
                  <h2  id="cardheading">iPad</h2>
                  {/* <p id="para">Thinstant classic.</p> */}
                  <p>From ₹34900.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202503_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1740119237380"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="parent1">
              <div className="child">
              <div className="hp hp3 ">
                  <h2 id="cardheading">iPhone 16 </h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹79990.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1741730417773"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp hp3 ">
                  <h2 id="cardheading">MacBook Pro</h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹163990.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593"
                  alt="..."
                  className="d-block w-100"
                />
              </div>

              <div className="child">
              <div className="hp hp3 ">
                  <h2 id="cardheading">Apple Watch Ultra 2</h2>
                 <span>New finish.Never quit. </span> 
                  <p>From ₹163990.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434777"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp hp12">
                  <h2  id="cardheading">Show Your True Color</h2>
                </div>
                <img 
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-bands-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1739675012977"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div class="rs-shop-subheader">
        
        <h1>
          <b id="bold">
            Help is here. <></>
            <span id="cardheading1">
               Whenever and however you need it.
            </span>
          </b>
        </h1>
      </div>
      <br />


      <div id="carouselExample1" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="parent1 parent2">
              <div className="child">
                <div className="hp hp12">
                  <p id="para">Thinstant classic.</p>
                  <h2  id="cardheading">Shop one on one with <br/> a  Specialist online.  </h2>
                  <p>From ₹46900.00</p> 
                </div>
                <img 
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821"
                  className="d-block w-100 card-2-img"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp">
                  <h2 id="cardheading">Join free Session <br /> at your Apple Store</h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹59900.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145"
                  className="d-block w-100 card-2-img"
                  alt="..."
                />
              </div>

              <div className="child child1">
              <div className="hp hp3  no-margin-div">
                  <h2 id="cardheading " > From enterprise <br /> to small business, <br /> we’ll work with you.</h2>
                 <span className="card-span">Apple Intelligence</span> 
                  <p>From ₹119990.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1724793636957"
                  className="d-block w-100 card-2-img"
                  alt="..."
                />
              </div>

              <div className="child">
              <div className="hp">
                  <h2  id="cardheading">iPad</h2>
                  {/* <p id="para">Thinstant classic.</p> */}
                  <p>From ₹34900.00</p> 
                </div>
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1727714996748"
                  className="d-block w-100 card-2-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* <div className="list-container">
      <ul className="cateul   card-list">
      <li>
          <div className="card-img" style={{width:"1050px"}}>  
           
          </div>
         
        </li>

        <li className="card-2-li">
            Mac
          <div className="card-img" >
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=500&hei=480&fmt=p-jpg&qlt=95&.v=1701194078821"
              alt=""
            />
          </div>
        </li>
      

       
        <li className="card-2-li">
            iPhone
          <div className="card-img">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=500&hei=480&fmt=p-jpg&qlt=95&.v=1697149577145"
              alt=""
            />
          </div>
        </li>
        
        <li className="card-2-li">
          iPad
        <div className="card-img">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=500&hei=480&fmt=p-jpg&qlt=95&.v=1724793636957"
              alt=""
            />
          </div>

          </li>
        <li className="card-2-li">
          Apple Watch
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838"  
              alt=""
            />
          </div>
          
          
          </li>
        <li className="card-2-li">
          
            AirPods
          <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822"
              alt=""
            />
          </div>
          
          </li>
        <li className="card-2-li"> 
          AirTag
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
              alt=""
            />
      
          </div>
          </li>
        <li className="card-2-li">
          Apple TV 4K
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
              alt=""
            />
          </div>
          
          </li>
        <li className="card-2-li">
          
          HomePod
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
              alt=""
            />
          </div>
          
          </li>
        <li >
          Accessories
        <div className="im">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502322543"
              alt=""
            />
          </div>
          
          </li>

          <li>
          <div className="im" style={{width:"100px"}}>
           
          </div>
         
        </li>




      </ul>
    </div> */}

    </div>
  );
};

export default Card;
