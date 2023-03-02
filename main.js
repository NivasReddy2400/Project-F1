const xlabels = [];
const ylabels = [];
const names = [];
async function getChart(){
    await getdrivers()
    let myChart = document.getElementById('graph').getContext('2d');
    const f1chart = new Chart(myChart,{
    type: 'bar',
    data: {
        labels:xlabels,
        datasets: [
            {
            label: 'Formula1 Podiums at end of 22',
            data: ylabels,
            backgroundColor: [
                '#0600EF',
                '#DC0000',
                '#0600EF',
                '#00D2BE',
                '#DC0000',
                '#00D2BE',
                '#FF8700',
                '#0090FF',
                '#0090FF',
                '#900000',
                '#FF8700',
                '#006F62',
                '#FFFFFF',
                '#2B4562',
                '#006F62',
                '#FFFFFF',
                '#2B4562',
                '#900000',
                '#005AFF',
                '#005AFF',
                '#005AFF',
                '#006F62'
            ],
            borderColor:[
                '#0600EF',
                '#DC0000',
                '#0600EF',
                '#00D2BE',
                '#DC0000',
                '#00D2BE',
                '#FF8700',
                '#0090FF',
                '#0090FF',
                '#900000',
                '#FF8700',
                '#006F62',
                '#FFFFFF',
                '#2B4562',
                '#006F62',
                '#FFFFFF',
                '#2B4562',
                '#900000',
                '#005AFF',
                '#005AFF',
                '#005AFF',
                '#006F62'
            ],
            borderWidth:0,
            fill:false,
        }
        ]
    }
})
}


async function getdrivers(){
    const names = []
    const podiums = []
const response = await fetch('S22drivers.csv');
const drivers = await response.text();
 const table = drivers.split('\n').slice(1);
//console.log(table)
table.forEach(row => {
    //console.log(row)
    const column = row.split(',');
    xlabels.push(column[1]);
    ylabels.push(column[5]);
    names.push(column[0]);
});
console.log(xlabels,ylabels)
}
//getdrivers();
getChart();
