import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


function App() {

  const [state, setState] = useState([]);

  const myRef = useRef([]);















  //   const menscat = [
  //     {
  //         heading : "Headgear",
  //         category : ["Hats", "Caps", "Bonnets", "Helmets", ]
  //     },
  //     {
  //         heading : "Topware",
  //         category : ["Shirt", "TShirt", "Sweatshirts", "Kurta", "Blazer", "Suite", "Coat"]
  //     },
  //     {
  //         heading : "Bottomware",
  //         category : ["Jeans", "Trouser", "Shorts", "Joggers", "Lower"]
  //     },
  //     {
  //         heading : "Footware",
  //         category : ["Formal", "casual", "Sneakers", "Sports", "Sandals", "Flip Flop & Slippers" ]
  //     },
  //     {
  //         heading : "Watches",
  //         category : []
  //     },
  //     {
  //         heading : "Accessories",
  //         category : ["Bags", "Belts", "Wallets"]
  //     }
  // ]

  // const menuItems = [
  //   {
  //     name: 'Mens',
  //     to: '/mens',
  //     conFile : menscat
  //   },
  //   {
  //     name: 'Womens',
  //     to: '/womens',
  //     conFile : ""
  //   },
  //   {
  //     name: 'Electronics & Accessories',
  //     to: '/electronics&accessories',
  //     conFile : ""
  //   },
  //   {
  //     name: 'Extra',
  //     to: '#',
  //     conFile : ""
  //   },
  // ]


  return (
    <>
      <h1>hii</h1>
      {/* <div className="dropdown">
          <ul className="d-flex justify-content-start gap-5 dropdown" >
            {menuItems.map((item) => (
              <li key={item.name} className="">
                <Link
                  to={item.to}
                  className="inline-flex items-center text-sm font-semibold text-white-800"
                >
                  {item.name}
                  <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>*/}

    </>
  );
}

export default App;
