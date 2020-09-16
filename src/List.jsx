import React, { useState } from "react";
import axios from "axios";
import "./styles/List.css";
import Info from "./Info.jsx";

function List() {
  // show all restaurants info when I click the button
  //state for all restaurant data
  const [allRestaurantsInfo, setAllRestaurants] = useState([]);
  //get all data
  async function getAllData() {
    console.log("getAllData here!");
    //開発環境ではlocalURLをfetchしても良い
    // const req = axios.get("https://localhost:9000/api/restaurants");
    //本番環境ではfetchするURL(データ）はインターネットから取る必要がある。
    //URLを手に入れるにはHerokuにてデプロイが完了している必要がある。
    const req = axios.get(
      "https://cc14solomvpproject-app.herokuapp.com/api/restaurants"
    );
    const res = await req;
    const data = res.data;
    console.log(data);
    // setState(data[0]);
    const all = data.map((el) => {
      return el.name + ":" + el.feature + "/";
    });
    setAllRestaurants(all);
  }
  console.log(allRestaurantsInfo);

  //logic for restaurants
  const [restaurantInfo, setRestaurant] = useState([]);

  async function restaurantFunc(e) {
    console.log("func clicked");
    console.log(e.target.value);
    const value = e.target.value;

    const req = axios.get(
      "https://cc14solomvpproject-app.herokuapp.com/api/restaurants"
    );
    const res = await req;
    const data = res.data;
    // console.log(data);
    // if (value === "shing") {
    //   // console.log(data[0]);
    //   let temp = [];
    //   let info = temp.concat([
    //     data[0].name,
    //     "/",
    //     data[0].feature,
    //     "/",
    //     data[0].business_hours1,
    //     "/",
    //     data[0].business_hours2,
    //     ",",
    //     data[0].regular_holiday,
    //     ",",
    //     data[0].place,
    //     ",",
    //     data[0].tell,
    //     ",",
    //     data[0].url,
    //   ]);
    //   setRestaurant(info);
    // } else if (value === "momo") {
    //   let temp = [];
    //   let info = temp.concat([
    //     data[1].name,
    //     "/",
    //     data[1].feature,
    //     "/",
    //     data[1].business_hours1,
    //     "/",
    //     data[1].business_hours2,
    //     ",",
    //     data[1].regular_holiday,
    //     ",",
    //     data[1].place,
    //     ",",
    //     data[1].tell,
    //     ",",
    //     data[1].url,
    //   ]);
    //   setRestaurant(info);
    // }

    let i = 0;
    if (value === "shing") {
      i = 0;
    } else if (value === "momo") {
      i = 1;
    } else if (value === "サラム") {
      i = 2;
    } else if (value === "タマン") {
      i = 3;
    } else if (value === "NAWAB") {
      i = 4;
    } else if (value === "8") {
      i = 5;
    } else if (value === "AANGAN") {
      i = 6;
    } else if (value === "NI") {
      i = 7;
    } else if (value === "Atila") {
      i = 8;
    }
    // console.log(data[0]);
    let temp = [];
    let info = temp.concat([
      data[i].name,
      "/",
      data[i].feature,
      "/",
      data[i].business_hours1,
      "/",
      data[i].business_hours2,
      ",",
      data[i].regular_holiday,
      ",",
      data[i].place,
      ",",
      data[i].tell,
      ",",
      // data[i].url,
    ]);
    setRestaurant(info);
  }
  console.log(restaurantInfo);

  return (
    <div className="list">
      {/* feature : I want to make the list more dinamic  */}
      <ul>
        {/* <li>All restaurants Feature?</li>
        <button onClick={getAllData}>Info</button> */}
        <li>シンガポール海南鶏飯</li>
        <button onClick={restaurantFunc} value="shing">
          Info
        </button>
        <li>MOMO</li>
        <button onClick={restaurantFunc} value="momo">
          Info
        </button>
        <li>サラムナマステ</li>
        <button onClick={restaurantFunc} value="サラム">
          Info
        </button>
        <li>タマンのカレー屋さん</li>
        <button onClick={restaurantFunc} value="タマン">
          Info
        </button>
        <li>NAWAB</li>
        <button onClick={restaurantFunc} value="NAWABU">
          Info
        </button>
        <li>Chinese cafe 8</li>
        <button onClick={restaurantFunc} value="8">
          Info
        </button>
        <li>AANGAN</li>
        <button onClick={restaurantFunc} value="AANGAN">
          Info
        </button>
        <li>Nong Inlay</li>
        <button onClick={restaurantFunc} value="NI">
          Info
        </button>
        <li>Atila's hundmade curry</li>
        <button onClick={restaurantFunc} value="Atila">
          Info
        </button>
      </ul>
      <Info
        allRestaurants={allRestaurantsInfo}
        restaurant={restaurantInfo}
        // name="test"
      />
    </div>
  );
}

export default List;
