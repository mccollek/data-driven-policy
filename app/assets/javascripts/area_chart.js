$(function(){
  new Highcharts.Chart({         
    chart: {
      renderTo: 'frames_chart',
      type: 'area'
    },
    title: {
      text: 'CHART TITLE'
    },
    subtitle: {
      text: 'Inner circle: 2008, outer circle: 2010'
    },
    xAxis: {        
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      }
    },
    yAxis: {
      title: {
        text: "Data Label"
      },
      min: 0
    },
    tooltip:{
      formatter: function(){
        return Highcharts.dateFormat("%B %e %Y", this.x) + ':' + Highcharts.numberFormat(this.y, 1);
      }
    },
    series: [      
      {
        name: '2008',
        data: [[Date.UTC(1970,  9, 27), 0 ],
            [Date.UTC(1970, 10, 10), 0.6 ],
            [Date.UTC(1970, 10, 11), 0.7 ],
            [Date.UTC(1970, 10, 12), 0.8 ],
            [Date.UTC(1970, 11,  9), 0.6 ],
            [Date.UTC(1970, 11, 16), 0.6 ],
            [Date.UTC(1970, 11, 28), 0.67],
            [Date.UTC(1971,  1,  1), 0.81],
            [Date.UTC(1971,  1,  8), 0.78],
            [Date.UTC(1971,  1, 12), 0.98]]
      }
    ]
  });
});
