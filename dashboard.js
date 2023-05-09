var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen=true;
    }
}
function closeSidebar(){
    if(!sidebarOpen){
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen=false;
    }
}



//charts//

//barcharts//

var barChartOptions = {
    series: [{
    data: [50000,100000,150000,200000,250000,300000]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show:false
    },
  },
  colors:[
    "#dd2344",
    "#344563",
    "#c7584r",
    "#356fr4",
    "#345246",
    
  ],
  plotOptions: {
    bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnwidth:'40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Food','Communication','Rent','Transport','Medical bills','Entertainment'],
  },
  yaxis: {
    title: {
        text: "Amount spent in RWF"
    }
  }
  };

  var barChart = new ApexCharts(document.getElementById('bar-chart'), barChartOptions);
  barChart.render();