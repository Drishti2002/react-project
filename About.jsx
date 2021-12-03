import React from "react";
import web from "../src/images/img-about.png";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page"
                btname="Contact Now"
                imgsrc={web}
                visit="/contact" />
        </>
    );
};

export default About;