import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';


const PieChart2 = () => {
    const { getDashbaord } = useSelector((state) => state.userReducer);
    console.log(getDashbaord)
    var data = [getDashbaord?.above21 ? getDashbaord?.above21 : 50, getDashbaord?.below21 ? getDashbaord?.below21 : 20]
    const options = {
        chart: {
            width: 580,
            type: 'pie'
        },
        colors: ['#e96a8d', '#f3aca2'],
        labels: ['Above 21', 'Below 21'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }],
        legend: {
            position: 'left',
            markers: {
                radius: 0
            }
        }
    }
    return (
        <>
            <div>PieChart</div>
            <ReactApexChart options={options} series={data} type="pie" height={350} />
        </>

    )
}

export default PieChart2