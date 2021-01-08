import React, {useState, useEffect} from 'react'
import './browse.css'
import Map from './map/map.js'
import Class from '../components/CreateClass/Class'
import { axiosWithAuth } from "../utils/axiosWithAuth";




export default function Browse(props){

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/api/classes")
        .then((res) => setClasses(res.data));
      }, []);
    

    return (
        <div className='browser-container'>
            <div className='filter-search-container'>
                <div>dropdownFilter1</div>
                <div>dropdownFilter2</div>
                <div>dropdownFilter3</div>
                <div>dropdownFilter4</div>
                <div>dropdownFilter5</div>
            </div>
            <section className='results'>
            <div className='results-container'>
                <div className='results-card-container'>
                    <div className='card-container'>
                    {classes.map((c) => {
                    return <Class key={c.id} details={c} />;
                    })}
                    </div>
                </div>
                <div className='maps-container' id='map'>
                   <Map  />
                </div>
            </div>
            </section>
        </div>
    )
}

