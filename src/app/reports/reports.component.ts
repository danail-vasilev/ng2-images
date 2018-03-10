import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  title = 'app';

  // Bar
  public totalLikesCommentData: Array<any> = [
    {
      data: [235, 890, 1321, 1789, 2490, 3165, 4101, 5112, 6401, 7891, 10219, 12901,
        14736, 16782], label: 'Total Likes', yAxisID: 'first-y-axis'
    },
    {
      data: [12, 32, 52, 74, 88, 102, 201, 223, 283, 348, 419, 570, 701, 890
      ], label: 'Total Comments', yAxisID: 'second-y-axis'
    }
  ];

  public barChartLabels: Array<any> = ['1st of May', '2nd of May', '3rd of May', '4th of May', '5th of May',
    '6th of May', '7th of May', '8th of May', '9th of May', '10th of May', '11th of May', '12th of May', '13th of May', '14th of May'];

  public barChartOptions: any = {
    legend: {
      display: true,
      position: 'right'
    },
    title: {
      display: true,
      text: 'May: Total Likes and Comments'
    },
    scales: {
      yAxes: [{
        id: 'first-y-axis',
        type: 'linear',
        position: 'left'
      }, {
        id: 'second-y-axis',
        type: 'linear',
        position: 'right'
      }]
    }
  };

  // Doughnut
  public doughnutChartLabels = ['Female', 'Male'];
  public doughnutChartData = [71, 29];
  public doughnutChartOptions: any = {
    legend: {
      display: true,
      position: 'right'
    },
    title: {
      display: true,
      text: 'Followers Distribution by Sex'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const idx = tooltipItem.index;
          const label = `${data.labels[idx]}: ${data.datasets[0].data[idx]}%`;
          return label;
        }
      }
    }
  };

  // Pie
  public pieChartLabels = ['>14', '15-24', '25-34', '35-44', '45+'];
  public pieChartData = [0.142, 0.227, 0.418, 0.191, 0.022];
  public pieChartOptions: any = {
    legend: {
      display: true,
      position: 'right'
    },
    title: {
      display: true,
      text: 'Followers Distribution by Age'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const idx = tooltipItem.index;
          const perc = Math.round(data.datasets[0].data[idx] * 100);
          const label = `${data.labels[idx]}: ${perc}%`;
          return label;
        }
      }
    }
  };

  // Pie2
  public pieChartLabels2 = ['UK', 'France', 'Germany', 'Russia', 'Latvia', 'Kongo'];
  public pieChartData2 = [642630.94, 510324.57, 226810.92, 302414.56, 37801.82, 170108.19];
  public pieChartOptions2: any = {
    legend: {
      display: true,
      position: 'right'
    },
    title: {
      display: true,
      text: 'Followers Distribution by Country'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const idx = tooltipItem.index;
          const allData = data.datasets[0].data;
          let sum = 0;
          allData.forEach(function(element) {
            sum += element;
          });
          const perc = Math.round((allData[idx] / sum) * 100);
          const label = `${data.labels[idx]}: ${perc}%`;
          return label;
        }
      }
    }
  };
}
