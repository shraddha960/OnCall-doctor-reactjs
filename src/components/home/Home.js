import React, { Component } from "react";

import udemy1 from "../../images/udemy1.jpg";
import udemy from "../../images/udemy.jpg";
import flipcart from "../../images/flipcart.jpg";
import timeprime from "../../images/timeprime.jpg";
import pizza from "../../images/pizza.jpg";
import oyo from "../../images/oyo.jpg";
import "./Home.css";
import "../Coupons.js";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>India's Leading Coupons &amp; Deals Marketplace</h1>
        <div className="row">
          <div className="column">
            <img src={udemy1} alt="udemy1" height="250" width="390" />
            &nbsp;&nbsp;
            <img src={flipcart} alt="flipcart" height="250" width="390" />
            &nbsp;&nbsp;
            <img src={timeprime} alt="timeprime" height="250" width="390" />
          </div>
        </div>
        <div className="go-poCont">
          <div className="go-poTitle">
            <h3>Popular Offers of the Day</h3>
          </div>
          <div className="go-poCar">
            <div
              class="go-po go-cpn-show"
              data-ctype="mb_m_h"
              data-pos="1"
              data-retype="c"
              data-goid="92450"
              data-type="cp"
            >
              <span>
                <img
                  src={pizza}
                  alt="Dominos Offers"
                  height="140"
                  width="290"
                />
              </span>
              <div class="go-poMer">
                <p>
                  <a href="/coupons">
                    Flat Rs 100 Off On Orders Those Are Above Rs 500
                  </a>
                </p>
              </div>
            </div>
            <div
              class="go-po go-cpn-show"
              data-ctype="mb_m_h"
              data-pos="2"
              data-retype="c"
              data-goid="90370"
              data-type="dl"
            >
              <span>
                <img src={oyo} alt="oyo Offers" height="140" width="290" />
              </span>
              <div class="go-poMer">
                <p>Flat 55% Off on Hotel Bookings(Coupon Code - OYOGRABR)</p>
              </div>
            </div>

            <div
              class="go-po go-cpn-show"
              data-ctype="mb_m_h"
              data-pos="3"
              data-retype="c"
              data-goid="76201"
              data-type="cp"
            >
              <span>
                <img src={udemy} alt="udemy Offers" height="140" width="290" />
              </span>
              <div class="go-poMer">
                <p>Udemy - Get 100% OFF Free Courses Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
