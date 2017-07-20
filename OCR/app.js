// app code goes here
// matrix.init()....
//
// have fun

const {execFileSync} = require('child_process');
var sudo = require('sudo');
const okrabyte = require('okrabyte');
//const fs = require('fs');


sudo([ 'pkill', 'malos_eye' ]);

setInterval(function()
{
    execFileSync('raspistill', ['-o', 'cam.jpg']);
    okrabyte.decodeFile('/home/pi/matrix-os/cam.jpg', function(error, data)
    {
        console.log(data);
    });
}, 5000);



//fs.unlink('/home/pi/matrix-os/cam.jpg');


