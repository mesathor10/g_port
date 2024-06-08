import React, {useEffect} from "react";
import predata from "./PersonalData.json";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="">
        {predata
          .filter((sort) => sort.id === parseInt(id))
          .map((data) => (
            <div
              className="text-light"
              style={{
                background: `${data.color}`,
              }} key={data.id}
            >
              <div className="container-fluid p-0" id={data.name}>
                <div className=" row justify-content-center align-items-center row-gap-4 pt-5">
                  <div className="col-10 text-start mt-5  display-2 fw-bold fst-italic">
                    {data.name}
                  </div>
                  
                  <div className="col-10 ">
                    <iframe
                      src={data.vid}
                      className="vid"
                      title="YouTube video player"
                      frameborder="0"
                      allow="autoplay; encrypted-media;"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-10 ">
                    <div className="fs-5">
                      <p>{data.desc1}</p>
                    </div>
                  </div>
                  <div className="col-10 ">
                    <div className="fs-5">
                      <p>{data.desc2}</p>
                    </div>
                  </div>
                  <div className="col-10 ">
                    <div className="fs-5">
                      <p>{data.desc3}</p>
                    </div>
                  </div>

                  {data.img ? (
                    <div className="col-10 ">
                      <img src={data.img} className="w-100" alt="" />
                    </div>
                  ) : (
                    <div className="col-10">
                      <swiper-container
                        class="mySwiper"
                        thumbs-swiper=".mySwiper2"
                        loop="true"
                        space-between="0"
                        autoplay-disable-on-interaction="false"
                        autoplay="true"
                        speed="2000"
                      >
                        <swiper-slide>
                          <img
                            src={data.img1}
                            style={{ objectFit: "cover", width: "100%" }}
                            alt=""
                          />
                        </swiper-slide>
                        <swiper-slide>
                          <img
                            src={data.img2}
                            style={{ objectFit: "cover", width: "100%" }}
                            alt=""
                          />
                        </swiper-slide>
                        <swiper-slide>
                          <img
                            src={data.img3}
                            style={{ objectFit: "cover", width: "100%" }}
                            alt=""
                          />
                        </swiper-slide>
                      </swiper-container>
                    </div>
                  )}

                  <div className="col-10 ">
                    <div className="fs-5">
                      <p>{data.desc4}</p>
                    </div>
                  </div>
                </div>

                <div className="w-100 my-5" style={{ height: "10vh" }}></div>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Detail;
