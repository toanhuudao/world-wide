import React from 'react';
import styles from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";

const CityList = ({cities, isLoading}) => {

    if (isLoading) return <Spinner/>

    if (!cities.length) return <Message message='Add your city'/>

    return (
        <ul className={styles.cityList}>
            {
                cities.map(city => {
                    return <CityItem city={city} key={city.id}/>
                })
            }
        </ul>
    );
};

export default CityList;