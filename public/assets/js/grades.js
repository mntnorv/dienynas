$(function () {
$('.graph').highcharts({
        title: {
            text: 'Vidurkių ataskaita',
            x: -20 //center
        },
        subtitle: {
            text: 'Lietuvių kalba',
            x: -20
        },
        xAxis: {
            categories: ['Gruodis', 'Sausis', 'Vasaris']
        },
        yAxis: {
            title: {
                text: 'Įvertinimas'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            max: 10
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Petriukas Petraitis',
            data: [7.0, 6.9, 9.5]
        }, {
            name: 'Jonas Jonaitis',
            data: [4.4, 5.5, 6.6]
        }, {
            name: 'Pūkis Pūkaitis',
            data: [10, 8, 9]
        }]
    });
});