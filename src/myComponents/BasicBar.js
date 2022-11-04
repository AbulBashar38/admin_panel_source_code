import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';



const BasicBar = () => {


    const { getDashbaord } = useSelector((state) => state.userReducer);

    console.log(getDashbaord)

    var seriesData = [{
        data: [getDashbaord?.users ? getDashbaord?.users : 0, 
            getDashbaord?.android ? getDashbaord?.android : 0,
             getDashbaord?.ios ? getDashbaord?.ios : 0,
             getDashbaord?.subscribe ? getDashbaord?.subscribe : 0,
             getDashbaord?.unSubscribe ? getDashbaord?.unSubscribe : 0,
            ]
    }]
    const [state, setState] = useState({
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#D55187'],
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['No Of Users', 'Android Users', 'IOS Users', 'Subscribed Users', 'Unsubscribed Users'],
            }
        },
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
    })
    return (
        <>
            <div>BasicBar</div>

            <Chart
                options={state.options}
                series={seriesData}
                type="bar"
                height="350px"
            />

        </>
    )
}

export default BasicBar