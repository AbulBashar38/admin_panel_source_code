import React from 'react'
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';

const Circle = () => {

    const { getDashbaord } = useSelector((state) => state.userReducer);

    // var data = [getDashbaord?.above21 ? getDashbaord?.above21 : 50, getDashbaord?.below21 ? getDashbaord?.below21 : 20]
    var data = [getDashbaord?.above21 ? getDashbaord?.above21 : 50, getDashbaord?.below21 ? getDashbaord?.below21 : 20]

    const option = {
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['#6435c9', '#7d53d6', '#9773e4', '#a28ad6'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return getDashbaord?.dateCards ? getDashbaord?.dateCards : 50
                        }
                    }
                }
            }
        },
        labels: ['Above 21', 'Below 21']
    }
    return (
        <div>
            <ReactApexChart
                options={option}
                series={data}
                type="radialBar"
                height="250px"
            />

        </div>
    )
}

export default Circle