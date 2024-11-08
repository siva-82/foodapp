import { Row, Col } from "react-bootstrap";
import { foodArray } from "../foodStore/foodArray";
// import ProductCard from "../components/ProductCard";
import FoodCard from "../components/FoodCard";
import { useContext, useRef, useState } from "react";
import "../App.css";

function Store() {
  const [filtered, setfilterd] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [filterF, setFilterF] = useState(false);
  const [sortF, setSortF] = useState(false);
  const [rangeVal, setRangeVal] = useState(null);

  const filterFood = (e) => {
    setSortF(false);

    if (e.target.value == "popular")
      setfilterd([...foodArray.filter((food) => food.popular == true)]);
    if (e.target.value == "discount")
      setfilterd([...foodArray.filter((food) => food.discount >= 5)]);
    if (e.target.value == "all") return setFilterF(false);

    setFilterF(true);
  };
  const priceRange = (e) => {
    setSortF(false);
    setfilterd([...foodArray.filter((food) => food.price <= e.target.value)]);
    setFilterF(true);
  };
  const sortFood = (e) => {
    setFilterF(false);

    if (e.target.value == "") return;
    if (e.target.value == "high")
      setSorted([...foodArray.sort((a, b) => b.price - a.price)]);
    if (e.target.value == "low")
      setSorted([...foodArray.sort((a, b) => a.price - b.price)]);
    if (e.target.value == "popularity")
      setSorted([...foodArray.sort((a, b) => b.stars - a.stars)]);
    setSortF(true);
  };

  return (
    <>
      <div className="container">
        <div className=" p-3 mt-5 Food__top d-flex justify-content-between align-items-center">
          <h1 align="center" className=" gradient">
            Bon Appétit
          </h1>
          <div className="d-flex justify-content-between align-items-center">
            <label className="me-2" for="idFilter">
              Filter:
            </label>
            <select
              className="me-2 form-control form-control-sm"
              onClick={filterFood}
            >
              <option value="all">All</option>
              <option value="popular">Popular</option>
              <option value="discount">Discount</option>
            </select>

            <label for="customRange2" className="me-2 ">
              Price
            </label>
            <input
              type="range"
              className="form-range inputRange"
              id="customRange2"
              max="100"
              step="10"
              onChange={(e) => setRangeVal(e.target.value)}
              onClick={priceRange}
            />
            <label for="customRange2" className="me-2 ">
             Rs.{rangeVal}
            </label>

            <label className="mx-2" for="idSort">
              Sort:{" "}
            </label>
            <select
              className="form-control form-control-sm "
              id="idSort"
              onClick={sortFood}
            >
              <option value="">Select</option>
              <option value="popularity">Popularity</option>
              <option value="high">High Price</option>
              <option value="low">Low Price</option>
            </select>
          </div>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {!sortF &&
            !filterF &&
            foodArray.map((food, idx) => (
              <Col align="center" key={idx}>
                <FoodCard foodData={food} />
              </Col>
            ))}
          {sortF &&
            !filterF &&
            sorted.map((food, idx) => (
              <Col align="center" key={idx}>
                <FoodCard foodData={food} />
              </Col>
            ))}
          {!sortF &&
            filterF &&
            filtered.map((food, idx) => (
              <Col align="center" key={idx}>
                <FoodCard foodData={food} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default Store;
