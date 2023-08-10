
window.onload = function () {

var options = {
    series: [120,30],
    labels: ["On Site", "Remote"],
    chart: {
    type: 'donut',
  },
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
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();



  var options = {
    series: [{
    name: 'Project',
    data: [44, 55, 57, 56, 61, 58, 63]
  }, {
    name: ' Bench',
    data: [76, 85, 101, 98, 87, 105, 91]
  }
],
    chart: {
    type: 'bar',
    height: 230
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tur', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yaxis: {
    min: 0,
    max: 200,
    tickAmount: 3,
    title: {
      text: '(Total employees)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val + "employees "
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();
}