import React from "react";

export default class Day extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            day: props.day.day,
            tasks: props.day.tasks,
            moods: props.day.moods
        }
        console.log("State:", this.state)
    }

    render() {
        console.log("State:", this.state)
        return (
            <div>
                <h2>{this.state.day.calendar_date}</h2>
                <h3>Moods</h3>
                {this.state.moods.map(function(mood, i){
                    return (<p>{mood.mood}</p>);
                })}
                <h3>Tasks</h3>
                {this.state.tasks.map(function(task, i){
                    return (
                        <div>
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <p>{task.time}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}