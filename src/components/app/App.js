import React from "react";
import Header from "../header";

import '../../index.css'
import Banner from "../banner/banner";
import Offers from "../offers";
import Advantages from "../advantages";
import Statistics from "../statistics";
import Reviews from "../reviews";
import Team from "../team/team";
import About from "../about-us";
import Footer from "../footer";
function App() {
    return (
        <>
            <div>
                <Header/>
                <Banner />
                <Offers />
                <Advantages />
                <Statistics />
                <Team />
                <About />
                <Reviews />
                <Footer />
            </div>
        </>
    );
}

export default App;
