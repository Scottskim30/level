// app code goes here
// matrix.init()....
//
// have fun


var options =
{
	refresh: 50, timeout: 15000
}
matrix.init('temperature', options).then(function(data)
{
	var a = data.value;
	console.log(a);
	matrix.led(
	{
		arc: 18 * a, color: 'rgba(10,0,0,.4)', start: 0
	}).render();

	
	
});
