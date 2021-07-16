import {storageService} from './async-storage.service.js'

const gStays=[
  {
    _id: "101",
    name: "Ribeira Charming Duplex",
    // imgUrls: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    imgUrls: [
      {
        url: require("../assets/img/stays/new_york/1/1.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/2.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/3.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
    ],
    price: 350.0,
    summary:
      "Fantastic studio apartment with three bedrooms, located in Manhattan",
    propertyType: "House",
    accommodates: 2,
    amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
    host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
    loc: {
      country: "New York",
      countryCode: "NY",
      address: "Manhattan, New York",
      lat: 40.73061,
      lng: -73.935242,
    },
    rateAvg: 4.95,
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "user2",
          imgUrl: require("../assets/img/user/1.png"),
        },
      },
    ],
  },
  {
    _id: "102",
    name: "Ribeira Charming Duplex",
    imgUrls: [
      {
        url: require("../assets/img/stays/new_york/1/1.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/2.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/3.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
    ],
    price: 350.0,
    summary:
      "Fantastic studio apartment with three bedrooms, located in Manhattan",
    propertyType: "House",
    accommodates: 2,
    amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
    host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
    loc: {
      country: "New York",
      countryCode: "NY",
      address: "Manhattan, New York",
      lat: 40.73061,
      lng: -73.935242,
    },
    rateAvg: 4,
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Tal",
          imgUrl:  require("../assets/img/user/2.png"),
        },
      },
    ],
  },
  {
    _id: "103",
    name: "Ribeira Charming Duplex",
    imgUrls: [
      {
        url: require("../assets/img/stays/new_york/1/1.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/2.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/3.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
      {
        url: require("../assets/img/stays/new_york/1/4.png"),
      },
    ],
    price: 350.0,
    summary:
      "Fantastic studio apartment with three bedrooms, located in Manhattan",
    propertyType: "House",
    accommodates: 2,
    amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
    host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
    loc: {
      country: "New York",
      countryCode: "NY",
      address: "Manhattan, New York",
      lat: 40.73061,
      lng: -73.935242,
    },
    rateAvg: 4,
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "Or",
          imgUrl: "/img/img2.jpg",
        },
      },
    ],
  }
      
]

export const stayService={
    query
} 

const STAY_KEY='stays'

 async function query(){
    const staysInStorage = await storageService.query(STAY_KEY)
    if (!staysInStorage || !staysInStorage.length) {
        storageService.postMany(STAY_KEY,gStays)
        return gStays
    }
    return staysInStorage 
}