import React from "react";
import web from "../src/images/img-home.svg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with"
                brand="Drishti Priya"
                btname="Get Started"
                imgsrc={web}
                visit="/service" />
        </>
    );
};

export default Home;