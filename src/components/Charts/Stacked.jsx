import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width: 0}}} //to remove the chart border
      tooltip={{enable: true}}
      LegendSettings={{background: 'white'}}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} /> {/* services are features that you want to have in your chart */}
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked