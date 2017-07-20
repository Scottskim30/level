// app code goes here
// matrix.init()....
//
// have fun

var options = 
{
    refresh: 25,
    timeout: 15000
}

    var time = 0;
    var quad;
    var amp;
    var angm;
    var freq;

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

    angm = Math.atan(y/x) * 180 / Math.PI;

    //console.log('Quadrant: ' + quad);
    //console.log('Angle: ' + angle);
    switch(quad)
    {
        case 1:
        {
            angm = 180 - angm;
            break;
        }
        //quad 2 is already accounted for
        case 3:
        {
            angm = 360 - angm;
            break;
        }
        case 4:
        {
            angm += 180;
            break;
        }
    }

    amp = 1 / (Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2)));

    freq = 1 / (2 * Math.PI * Math.sqrt(amp / 9.8));

    
    matrix.led(
        {
            angle: angm + Math.floor(Math.sin(freq * time /1000) * 30),
            color: 'rgba(0,0,25,0.4)'
        }
    ).render();

    console.log('Amplitude: ' + amp);
    console.log('Frequency: ' + freq);
    console.log('Angle: ' + angm);
    console.log('Time: ' + time);
    time += 25;
    time %= 2 * Math.PI * 1000;

});