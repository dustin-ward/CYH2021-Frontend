import React from "react";
import Moods from "./Moods.js";

export default class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: props.day.day,
            tasks: props.day.tasks,
            moods: props.day.moods
        }
    }

    componentDidUpdate() {
        if(this.state.day.id !== this.props.day.day.id) {
            this.setState({
                day: this.props.day.day,
                tasks: this.props.day.tasks,
                moods: this.props.day.moods
            })
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.day.calendar_date}</h2>
                <h3>Moods</h3>
                <Moods day={this.props.day.day} moods={this.props.day.moods} tasks={this.props.day.tasks}/>
                {/* {this.state.moods.map(function(mood, i){
                    return <Mood mood={mood.mood}/>;
                })} */}
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