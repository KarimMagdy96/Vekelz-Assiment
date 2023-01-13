import React from "react";
import "./Booking.css";
import Helmet from "../../Components/Helmet/Helmet";
import { Line } from "react-chartjs-2";
export default function Booking() {
  return (
    <>
      <Helmet title="Booking">
        <section className="Booking">
          <h1>Booking</h1>
          <div className="BookingMenu d-flex  justify-content-between align-center">
            <div className="drop d-flex">
              <div class="dropdown">
                <input type="checkbox" id="dropdown" />

                <label class="dropdown__face" for="dropdown">
                  <div className="dropContent">
                    <div class="dropdown__text">New</div>

                    <div class="dropdown__arrow d-flex  justify-content-center align-content-center">
                      <img
                        src="/src/assets/img/Rectangle.svg"
                        id="goo"
                        alt=""
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div class="dropdown2">
                <input type="checkbox" id="dropdown" />

                <label class="dropdown__face" for="dropdown">
                  <div className="dropContent">
                    <div class="dropdown__text">Toyota</div>

                    <div class="dropdown__arrow d-flex  justify-content-center align-content-center">
                      <img
                        src="/src/assets/img/Rectangle.svg"
                        id="goo"
                        alt=""
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="BookingBtns">
              <div>
                <img src="/src/assets/img/dashboard icon.svg" alt="" />
              </div>
              <div>
                <img src="/src/assets/img/Lines.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="cardContainer row">
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between align-items-center">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span className="">
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img src="/src/assets/img/white car.png" alt="" />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img
                    src="/src/assets/img/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
                    alt=""
                  />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layer">
                <div className="CardHeader d-flex justify-content-between">
                  <div className="headerTitle">Porshe 718 Cayman S</div>
                  <div>
                    <img src="/src/assets/img/Vector.svg" alt="like" />
                  </div>
                </div>
                <div className="subtitle">Coupe</div>
                <div className="cardImg">
                  <img src="/src/assets/img/white car.png" alt="" />
                </div>
                <div className="footer d-flex justify-content-between">
                  <div className="FooterWrapper d-flex">
                    <div className="cardPerson">
                      <span>
                        <img src="/src/assets/img/Peson.svg" alt="" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="cardCarType">
                      <span>
                        <img src="/src/assets/img/itration.svg" alt="" />
                      </span>
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="cardPrice">
                    <span> $400</span>
                    <span>/d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}
