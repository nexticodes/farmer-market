import React from 'react';
import ScheduleList from './ScheduleList';
import SeasonalProduceList from './SeasonalProduceList';


function App(){
  return (
    <div>
      <style jsx global>{`
          html{
            padding: 50px;
            margin: 100px;
            font-family: Monospace;
            border: 5px solid black;
          }

          .title{
            background-color: royalblue;
            text-align: center;
            text-shadow: 0px 0px 15px white;
            box-shadow: 0px 0px 25px black;
            border: 2px dotted white;
            height: 75px;
            width: 400px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 50px;
            padding-bottom: 10px;
          }

          .subtitle{
            background-color: crimson;
            text-align: center;
            text-shadow: 0px 0px 15px white;
            box-shadow: 0px 0px 25px black;
            border: 2px dotted white;
            height: 75px;
            width: 400px;
            padding-top: 30px;
            margin-left: auto;
            margin-right: auto;
          }


      `}</style>
      <h1 className="title">Farmer's Market Schedule</h1>
      <hr/>
      <h1 className="subtitle">SCHEDULE</h1>
      <ScheduleList/>
      <hr/>
      <h1 className="subtitle">SEASONAL PRODUCE LIST!</h1>
      <SeasonalProduceList/>
    </div>
  );
}

export default App;