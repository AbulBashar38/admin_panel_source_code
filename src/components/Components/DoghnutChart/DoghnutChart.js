import React from 'react'
import Chart from "react-apexcharts";

const DoghnutChart = () => {

    const [state,setState]=React.useState(
        {options:{
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      show:false
                    },
                    value: {
                      show:false
                    }
                  }
                }
              }
            }
          }}
    )

  return (
    <Chart
    options={state.options}
    // series={seriesData}
    type="bar"
    height="350px"
    />
  )
}

export default DoghnutChart