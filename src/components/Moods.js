import React, {useState, useEffect} from "react";
import Select, { StylesConfig } from 'react-select';
import moodOptions from "./MoodOptions.js"

export default function Moods(props) {
    const [curMoods, setCurMoods] = useState([])

    useEffect(() => {
        setCurMoods(getCurMoods())
        console.log("CURMOODS", curMoods)
    }, [props.day])

    function getCurMoods() {
        console.log("GETTING", props.moods)
        let a = []
        props.moods.forEach(mood => {
            moodOptions.map((m, i) => {
                if(m.value === mood.mood) {
                    a.push(m)
                }
            })
        });
        console.log("A",a)
        return a;
    }

    return (
        <div className='moods'>
            {
                props.moods.map((mood, i) => (
                    <div className='mood'>
                        <p><img src="http://placehold.it/20x20" alt=""></img> | {mood.mood || "null"}</p>
                    </div>
                ))
            }

            <Select
                closeMenuOnSelect={false}
                isMulti
                value={curMoods}
                options={moodOptions}
                onChange={setCurMoods}
                // styles={colourStyles}
            />
        </div>
    )
}