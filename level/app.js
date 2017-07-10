// app code goes here
// matrix.init()....
//
// have fun

var options =
{
    refresh: 50,
    timeout: 15000
}

    var quad;
    var amp;
    var angle;

matrix.init('gyroscope', options).then(function(data)
{
    var y = data.roll;
    var x = data.pitch;

    if(y >= 0 && x >= 0)
        quad = 1;
    else if(y >= 0 && x < 0)
    {
        quad = 2;
        x *= -1;
    }
    else if(x < 0)
    {
        quad = 3;
        y *= -1;
        x *= -1;
    }
    else
    {
        quad = 4;
        y *= -1;
    }

    angle = Math.atan(y/x) * 180 / Math.PI;

    //console.log('Quadrant: ' + quad);
    //console.log('Angle: ' + angle);
    switch(quad)
    {
        case 1:
        {
            angle = 180 - angle;
            break;
        }
        //quad 2 is already accounted for
        case 3:
        {
            angle = 360 - angle;
            break;
        }
        case 4:
        {
            angle += 180;
            break;
        }
    }

    amp = Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2));

    //console.log('Amplitude: ' + amp);


    var shape =
    {
        arc: amp * 8,
        color: 'rgba(200, ' + (10 + (190 - 9.5 * amp)) + ', 0, 0.4)',
        start: angle - amp * 4
    }
    
    if(amp < 3)
    {
        shape.color = 'rgba(0, 25, 0, 0.2)'
        shape.arc = 360
    }

    matrix.led(shape).render();
});