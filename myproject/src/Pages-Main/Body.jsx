import React from "react";

const Body = () => {
  return (
    <div className="parent">
      <div class="rs-shop-subheader">
        {" "}
        <h1>
          <b>
            Store.
            <span id="thebestline">
              The best way to buy the products you love.
            </span>
          </b>
        </h1>
      </div>
      
      <div className="hello"> 
        <div>
        <div className="contact-card">
          <img
            className="helpimg"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202309_AV4?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050329"
            alt="Help Center"
          />
          <div className="link-bold">
            <p className="needshoppinghelp">Need shopping help?</p>
            <a href="#">Ask a Specialist &#8599;</a>
          </div>
        </div>

        <div className="contact-card second-card">
          <img
            className="helpimg contactimg"
            src="https://cdn-icons-png.flaticon.com/128/6424/6424299.png"
            alt="Help Center"
          />
          <div className="link-bold">
            <p className="needshoppinghelp">Visit an Apple store</p>
            <a href="#">Ask a Specialist &#8599;</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Body;
