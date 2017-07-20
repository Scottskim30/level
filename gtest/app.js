// app code goes here
// matrix.init()....
//
// have fun
var options =
{
    refresh : 50,
    timeout : 15000
}

matrix.init('gyroscope', options).then(function(data)
{
    var a =  data.roll;
    var b = data.pitch;
    var leda;
    var ledb;

if(a <= 0)
{
leda = 
    {
        color: 'rgba(10,0,0,.5)',
        start: 270 - a,
        arc: 2 * a
    };
}

else
{
leda =
    {
        color: 'rgba(0,10,0,.5)',
        start: 90 - a,
        arc: 2 * a
    };
}

if(b <= 0)
{
ledb =
    {
        color: 'rgba(0,0,10,.5)',
        start: 0 - b,
        arc: 2 * b
    };
}

else
{
ledb =
    {
        color: 'rgba(0,0,10,.5)',
        start: 180 - b,
        arc: 2 * b
    };
}

matrix.led([leda, ledb]).render();
    
});