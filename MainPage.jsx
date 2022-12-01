import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFilter } from "react-icons/bs";
import Card from "./Card";
import Card02 from "./Card02";
import Card03 from "./Card03";
import { BiCategory } from "react-icons/bi";

const MainPage = () => {
  return (
    <>
      <div className="flex bg-[#f0f0f0] absolute right-4 top-[6rem] rounded full gap-2 px-2 py-2 shadow-lg">
        <GiHamburgerMenu className="hover:text-white" />
        <BsFilter className="" />
        <BiCategory className="" />
      </div>
      <div className="absolute flex flex-col border-2 border-b-gray-400 right-4 rounded-lg  px-2 py-2 -bottom-[6rem] shadow-lg">
        <p>+</p>
        <p>-</p>
      </div>
      <div class="tree">
        <ul>
          <li>
            <a href="#">
              <Card personImage="../images/1.jpg" />
            </a>
            <ul>
              <li>
                <a href="#">
                  <Card
                    name="Seth williams"
                    position="Managing director"
                    personImage="../images/4.jpg"
                    country="Brazil"
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"
                  />
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <Card03
                        name="Seth rogan"
                        position="Marketign director"
                        image="../images/9.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card02
                        name="Seth williams"
                        position="Managing director"
                        image="../images/5.jpg"
                      />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <Card
                    name="Dave Cooper"
                    position="managing director"
                    personImage="../images/2.jpg"
                    country="USA"
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041"
                  />
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <Card03
                        name="ivan rodriguez"
                        position="Managing director"
                        image="../images/1.jpg"
                      />{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <Card02
                            name="ivan rogers"
                            position="Senior director"
                            image="../images/3.jpg"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Card02
                            name="Sandy mantis"
                            position="Managing director"
                            image="../images/4.jpg"
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <Card02
                        name="dua lipa"
                        position="associate director"
                        image="../images/6.jpg"
                      />{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <Card
                    name="kalvin harris"
                    position="regional director"
                    personImage="../images/9.jpg"
                    country="Italy"
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
                  />
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <Card03
                        name="katie morgan"
                        position="regional director"
                        image="../images/8.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card03
                        name="danny williams"
                        position="Managing director"
                        image="../images/7.jpg"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainPage;
