import React from 'react'
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';

const Circle = ({name}) => {

    const { getDashbaord } = useSelector((state) => state.userReducer);

    // var data = [getDashbaord?.above21 ? getDashbaord?.above21 : 50, getDashbaord?.below21 ? getDashbaord?.below21 : 20]
    var data = [getDashbaord?.above21 ? getDashbaord?.above21 : 50, getDashbaord?.below21 ? getDashbaord?.below21 : 20]
    console.log(data,"dsadasdasd")
    const option = {
        series: [44, 55, 41, 17, 15],
        stroke: {
            colors: ['#fff','#fff']
          },
        options: {
          chart: {
            type: 'donut',
            width: 380,
            height: 500,
          },
          dataLabels: {
            enabled: true,

          },
            labels: ['Subscribed User', 'Unsubscribed User'],
            colors:['rgba(102, 85, 187, 1)', 'rgba(102, 85, 187, 0.1)'],
            
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          legend: {
            show: true,
            showForSingleSeries: true,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'bottom',
            // horizontalAlign: 'center',
            horizontalAlign: 'left',
            verticalAlign:'center', 
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [`Subscribed User: \t        ${data[0]}`,`Unsubscribed User: \t ${ data[1]}`],
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: true,
            },
            
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        }
        },
      
    }
    return (
        <div className="col-lg-3 col-md-3" style={{backgroundColor:"white",padding:30,margin:30,borderRadius:10}} >
            <div style={{fontSize:20,fontWeight:"bold"}}>
                {name}
            </div>
            <ReactApexChart
                options={option.options}
                series={data}
                type="donut"
                height="300px"
            />

        </div>
    )
}

export default Circle