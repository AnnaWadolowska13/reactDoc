import React from "react";

function Welcome(){
    return(
        <div className="bg-dark-main pt-20 pb-10 text-center">
            <p className="font-bold text-react-blue text-6xl">React</p>
            <p className="py-8 text-white text-3xl font-light">A JavaScript library for building user interfaces</p>
            <div>
                <button className="text-black py-3 px-6 bg-react-blue my-8 text-xl">Get Started</button>
                <span className="text-react-blue text-xl py-3 px-6">Take the Tutorial ></span>
            </div>
        </div>
    )
}

export default Welcome;