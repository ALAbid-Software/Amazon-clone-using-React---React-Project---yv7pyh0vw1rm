import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import Checkout from "./Checkout";
import "./Home.css";
import { sizing } from "@material-ui/core";
import Product from "./Product";

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          className="home__image"
        />
        <div className="home__row" style={{ marginTop: "300px" }}>
          <Product
            id="12849"
            title="Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers)."
            price={22999}
            image={`https://m.media-amazon.com/images/I/8104evx11QL._AC_UL480_FMwebp_QL65_.jpg`}
            rating={5}
          />
          <Product
            id="3534345"
            title="HP 15s, AMD Ryzen 3 3250U, 15.6 inch(39.6cm) HD Laptop(8GB RAM/256 GB SSD/AMD Radeon Graphics/Win 11/MSO/Dual Speakers) 15s-er1501AU)."
            price={31999}
            image={`https://m.media-amazon.com/images/I/816lVSH7q9L._AC_UY327_FMwebp_QL65_.jpg`}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="24242"
            title="Noise ColorFit Pulse Grand Smart Watch with 1.69(4.29cm) HD Display, 60 Sports Modes, 150 Watch Faces, Fast Charge, Spo2, Stress, Sleep, Heart Rate Monitoring & IP68 Waterproof (Jet Black))."
            price={999}
            image={`https://m.media-amazon.com/images/I/61Q0R5cdxWL._AC_UL480_FMwebp_QL65_.jpg`}
            rating={5}
          />
          <Product
            id="23553647"
            title="Boult Audio Z20 True Wireless in Ear Earbuds with Zen ENC Mic, 40H Playtime, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, Environmental Noise Cancellation, IPX5 Ear Buds TWS (Green))."
            price={1398}
            image={`https://m.media-amazon.com/images/I/71GFeaOKepL._SX679_.jpg`}
            rating={5}
          />
          <Product
            id="359473"
            title="Wireless Bluetooth Speaker For Samsung Galaxy Tab A 10.1 2019 Ultra Boost Bass with DJ Sound Portable Home Speaker with Audio Line in TV Supported,USB,FM,TF Card and AUX Cable Supported Waterproof KBS255 Speaker - Mix."
            price={499}
            image={`https://m.media-amazon.com/images/I/41WLq89wLFL.jpg`}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4839274"
            title="Hammonds Flycatcher Genuine Leather Executive Formal Office Bag | Shoulder Laptop Messenger Bag for Men | MacBook|Notebook Upto 14 Inch| Crossbody Handbags with Shoulder Straps | Brown | LMB105."
            price={3199}
            image={ `https://m.media-amazon.com/images/I/918H39+3PgL._SX679_.jpg`}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
