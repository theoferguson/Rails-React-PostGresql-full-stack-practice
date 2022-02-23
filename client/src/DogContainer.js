import { useState, useEffect } from "react"
import './DogContainer.css'


function DogContainer({setAllPoops, allPoops}) {

    function recordPoop(e) {
        console.log(e.target.name)

        setAllPoops([{
            name: e.target.name,
            pooped_at: new Date().getHours() + ":" + new Date().getMinutes() 
        }, ...allPoops])
    }

    console.log(allPoops)

    return (
        <div className="cards">
            <div id="lumi-card" className="card">
                <h2>Lumi</h2>
                <img src='/lumi.jpg' alt="image of lumi" />
                <button onClick={recordPoop} name='lumi'>
                    lumi pooped
                </button>
            </div>
            <div id="monte-card" className="card">
                <h2>Monte</h2>
                <img src='/monte.jpg' alt="image of monte" />
                <button onClick={recordPoop} name='monte'>
                    monte pooped
                </button>
            </div>
        </div>
    )
}

export default DogContainer