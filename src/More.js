import React from "react";

function More() {
  return (
    <div className="container-fluid more mt-5">
      <swiper-container
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        loop="true"
        space-between="10"
        autoplay-disable-on-interaction="false"
        autoplay="true"
        speed="2000"
      >
        <swiper-slide>
          <img src="./pphoto/Zombie_fury.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/Zombie_fury1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/Zombie_fury2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/HORROR_1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/HORROR_2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/V20 1.JPG" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/V20 2.JPG" alt="" />
        </swiper-slide>
      </swiper-container>

      <swiper-container
        class="mySwiper2"
        loop="true"
        space-between="10"
        slides-per-view="7"
        free-mode="true"
        watch-slides-progress="true"
      >
        <swiper-slide>
          <img src="./pphoto/ZL1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/ZL2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/ZL3.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/HORROR_1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/HORROR_2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/V20 1.JPG" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./pphoto/V20 2.JPG" alt="" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default More;
