import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn,FaWhatsapp,FaFacebook,FaPinterest,FaInstagram} from "react-icons/fa"
import Resources from "../public/exporter"
import Reservation from "../public/exporter"
export const pages =[
  "Home","About","Menu","Reservation","Gallery" ,"Blog","Contact"
] 

export const navIcons =[
    <FaInstagram/>,<FaFacebook/>,<BsTwitter/>,<FaPinterest/>
]

export const Typography ={
  header:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .",
}

export const Historytext =[
  {
   logo:Reservation.Location,header:"Locate Us",text:"25 RiverSide ,San fransisco,California"
  },
  {
    logo:Reservation.OpenHours,header:"OpenHours",text:"Mon To Fri 9:Am - 9:Pm"
   },
   {
    logo:Reservation.Reservation,header:"Reservations",text:"hireesturant@gmail.com"
   }
]
export const BriefHistoryText ={
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate nostrum iste exercitationem repellat tempora voluptates dolorem nihil modi atque accusantium temporibus quos repellendus, magni vitae error mollitia? In, nulla.",
  year1:"It all started in 1996 amet consectetur adipisicing elit ",
  year2:"Now in 2023 over 20 years of service of content elite distribution"
}


export const SpecialOffersList =[
  {
    heading:"Starters",
    mealList:[
      {
        image:Resources.Starter01,
        header:"RawScalups from Oven",
        text:"Candied Jerusalem arithokes truffle",
        price:"20"
      },
      {
        image:Resources.Starter02,
        header:"Spring Roll",
        text:"Candied Jerusalem arithokes truffle",
        price:"25"
      },
      {
        image:Resources.Starter03,
        header:"French Onion Soup",
        text:"Candied Jerusalem arithokes truffle",
        price:"27"
      },
      {
        image:Resources.Starter04,
        header:"Tomato Bruschetta",
        text:"Candied Jerusalem arithokes truffle",
        price:"27"
      }
    ]
  },
  {
    heading:"Main Dish",
    mealList:[
      {
        image:Resources.Dish01,
        header:"Grid Salmon With Dil Sauce",
        text:"Candied Jerusalem arithokes truffle",
        price:"20"
      },
      {
        image:Resources.Dish02,
        header:"Roast Beef With Vegetables",
        text:"Candied Jerusalem arithokes truffle",
        price:"42"
      },
      {
        image:Resources.Dish03,
        header:"Markerish Vegitarian Curry",
        text:"Candied Jerusalem arithokes truffle",
        price:"28"
      },
      {
        image:Resources.Dish04,
        header:"Spicy Vegan Potato Curry",
        text:"Candied Jerusalem arithokes truffle",
        price:"32"
      }
    ] 
  },
  {
    heading:"Dessert",
    mealList:[
      {
        image:Resources.Desert01,
        header:"Apple Pie With Cream",
        text:"Candied Jerusalem arithokes truffle",
        price:"40"
      },
      {
        image:Resources.Desert02,
        header:"Spring Roll",
        text:"Lemon Meruguin Pie",
        price:"42"
      },
    ] 
  } 
]
