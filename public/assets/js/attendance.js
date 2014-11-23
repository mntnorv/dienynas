$(function () {
    $('.graph').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Lietuvių kalbos lankomumo ataskaita'
        },

        xAxis: {
            categories: ['Petriukas Petraitis', 'Jonas Jonaitis', 'Pūkis Pūkaitis']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Pamokų skaičius'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Dalyvavo',
            data: [15, 19, 10]
        }, {
            name: 'Nepateisinta',
            data: [3, 0, 7]
        }, {
            name: 'Pateisinta',
            data: [2, 1, 3]
        }]
    });
});