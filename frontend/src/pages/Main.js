import React, {useState, useEffect} from 'react';
import "./Main.css";
import { Appbutton, Appheader, SearchContainer, Timeline } from "components";
import { useRecoilValue } from 'recoil';
import { stationListState } from 'store';
import api from "api/mainApi";

export default function Main() {    
    const stationList = useRecoilValue(stationListState);
    const [refreshTime, setTime] = useState('');

    useEffect(() => {
      api.getSavedTime().then((res) => {
        let time = res.data[0].request_time
        setTime(time);
      });
      api.getStationList().then((res) => {
        var stationList = new Array(res.data);
        console.log(stationList);
    })
    }, []);

    const today = new Date();
    const before = new Date(refreshTime);
    const diff = today.getTime() - before.getTime();
    const diffMin = diff / (60 * 1000);
    console.log(today + "\n" + before);
    console.log(diffMin);
    const refresh = diffMin.toString().charAt() + " 분 전";

    return (
    <div className="html">
        <div className="App">
            <Appheader />
            <SearchContainer />

            <div className="InformationClass">
                <div className="Informationbox">
                    <p>지금 지연이 예상되고 있어요!</p>
                <Timeline />
                </div>
            </div>
                {
                    diffMin >= 5 
                    ? <Appbutton message="새로고침" /> 
                    : <Appbutton message={refresh} /> 
                }
        </div>
    </div>
    );
}