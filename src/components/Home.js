import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Home() {
  const token = localStorage.getItem('token'); //check if set to null
  const [calValue, setCalValue] = useState(new Date());

  return (
    <div className="Home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            {token != null && 
              <Calendar onChange={setCalValue} value={calValue}/>
            }
          </div>
          <div class="col-lg-5">
            <h1 >Home </h1> {token}
            <p>

              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
