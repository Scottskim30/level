// app code goes here
// matrix.init()....
//
// have fun

var options =
{
    refresh: 1000,
    timeout: 15000
}

matrix.init('humidity', options).then(function(data)
{
    var a = data.value;
    /*matrix.led(
    {
        color: 'blue',
        arc: 2 * a,
        start: 270 - a
    }
    ).render();*/


    var array = [360];
    for(var x = 0; x < a * 1.8; x++)
    {
        array[x * 2] =
        {
            angle: 270 - x,
            color: 'rgba(' + x + ', 0,' + (180 - x) + ', 0.2)'
        }

        array[x * 2 + 1] =
        {
            angle: 271 + x,
            color: 'rgba(' + x + ', 0,' + (180 - x) + ', 0.2)'
        }
    }
    
    matrix.led(array).render();
    
});