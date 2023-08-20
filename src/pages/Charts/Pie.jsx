import React from 'react';
import { AccumulationChart, PieSeries } from '@syncfusion/ej2-charts';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  )
};

export default Pie;