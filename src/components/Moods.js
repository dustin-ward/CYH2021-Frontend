import { PROPERTY_TYPES } from "@babel/types";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Select, { StylesConfig } from 'react-select';
import moodOptions from "./MoodOptions.js"
import usePrevious from "./usePrevious.js";

export default function Moods(props) {
    let navigate = useNavigate();
    const [curMoods, setCurMoods] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))
    const prevDay = usePrevious(props.day)
    const prevMoods = usePrevious(curMoods)
    const prevTasks = usePrevious(props.tasks)

    // console.log("CURMOODS", curMoods)
    // console.log("PREVDAY", prevDay)
    // console.log("PREVMOODS", prevMoods)
    // console.log("PREVTASKS", prevTasks)

    useEffect(() => {
        setCurMoods(getCurMoods())
        // return function save() {
        //     if(curMoods !== prevMoods) {
        //         console.log("POST", curMoods);
        //     }
        // }
    }, [props])

    function getCurMoods() {
        let a = []
        if(props.moods) {
            props.moods.forEach(mood => {
                moodOptions.map((m, i) => {
                    if(m.value.mood === mood.mood) {
                        a.push(m)
                    }
                })
            });
        }
        return a;
    }

    function sumMoods() {
        let sum = 0.0;
        curMoods.forEach(mood => {sum += mood.value.value})
        return sum;
    }

    function postChanges() {
        let result = curMoods.map(a => a.value);
        console.log("RESULT TO SEND", result)
        console.log("obj to send", {data: {
            day: props.day,
            moods: result,
            tasks: props.tasks
        }})

        // Make API call to get all days for user
        axios({
            method: 'post',
            url: 'http://localhost:8080/days',
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            data: {
                day: props.day,
                moods: result,
                tasks: props.tasks || []
            }
        })
        .then(res => {
            console.log("Response:", res.data)
            props.update()
        })
        .catch(err => {
            console.log(err)
            if(err.response.status === 401) {
            localStorage.removeItem('token')
            setToken(null)
            navigate('/login', {replace: true})
            }
        });
    }

    return (
        <div className='moods'>
            <p>Value: {sumMoods()}</p>
            <Select
                closeMenuOnSelect={false}
                isMulti
                value={curMoods}
                options={moodOptions}
                onChange={setCurMoods}
                // styles={colourStyles}
            />
            <button onClick={postChanges}>
                Save
            </button>
        </div>
    )
}