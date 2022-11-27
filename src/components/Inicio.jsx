import bg11 from "../assets/images/bg11.jpg";
import bg22 from "../assets/images/bg22.jpg";
import bg33 from "../assets/images/bg33.jpg";

const Inicio = () => {
  return (
    <>
      <section className="home" id="inicio">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="box"
                style={{
                  background: `url(${bg11}), no-repeat`,
                }}
              >
                <div className="content">
                  <span>never stop</span>
                  <h3>exploring</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className="box second"
                style={{ background: `url(${bg22}) no-repeat` }}
              >
                <div className="content">
                  <span>make tour</span>
                  <h3>amazing</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className="box"
                style={{ background: `url(${bg33}) no-repeat` }}
              >
                <div className="content">
                  <span>explore the</span>
                  <h3>new world</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
