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
    data: [14,10,8,6,5,4,2]
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
    categories: ['Laptop','Phone','Monitor','Headphones','Camera'],
  },
  yaxis: {
    title: {
        text: "Count"
    }
  }
  };

  var barChart = new ApexCharts(document.getElementById('bar-chart'), barChartOptions);
  barChart.render();