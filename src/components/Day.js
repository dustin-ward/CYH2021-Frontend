import React from "react";
import Moods from "./Moods.js";

export default class Day extends React.Component {
    constructor(props) {
        super(props)
        let obj = props.day()
        this.state = {
            day: obj.day,
            tasks: obj.tasks,
            moods: obj.moods
        }
    }

    componentDidUpdate() {
        let obj = this.props.day()
        console.log("OBJ:", obj)
        if(this.state.day.id !== obj.day.id) {
            this.setState({
                day: obj.day,
                tasks: obj.tasks,
                moods: obj.moods
            })
        }
    }

    // Convert MySQL date string to JS date obj
    parseISOString = (s) => {
        var b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], ++b[2], b[3], b[4], b[5], b[6]));
    }

    render() {
        return (
            <div>
                <h2>{this.parseISOString(this.state.day.calendar_date).toDateString()}</h2>
                <h3>Moods</h3>
                <Moods 
                    day={this.props.day().day}
                    moods={this.props.day().moods}
                    tasks={this.props.day().tasks}
                    update={this.props.update}
                />
                {/* {this.state.moods.map(function(mood, i){
                    return <Mood mood={mood.mood}/>;
                })} */}
                <h3>Tasks</h3>
                {this.state.tasks && this.state.tasks.map(function(task, i){
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