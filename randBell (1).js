
function randBell(average, variance) {
    var varHalf = variance / 2;
    var r, v1, v2;
    do {
        v1 = 2.0 * Math.random() - 1.0;
        v2 = 2.0 * Math.random() - 1.0;
        r = v1 * v1 + v2 * v2;
    } while (r >= 1.0 || r === 0.0);
    var fac = Math.sqrt(-2.0 * Math.log(r) / r);
    var value = average + v1 * fac * (average * varHalf);
    if (value < 0) {
        return 0;
    } else {
        return value;
    }
}

// Example usage:
var avg = 21500; // Average value
var variance = 0.175; // Variance
var i = 0;
var randValue = 0;
if (WScript.Arguments.Length > 1)
{
    if (Number(WScript.Arguments(0)) > 0)
    {
        avg = Number(WScript.Arguments(0));
    }
    if (Number(WScript.Arguments(1)) > 0)
    {
        variance = Number(WScript.Arguments(1));
    }
}
var maxValue = 0;
var minValue = avg;

do {
	randValue = randBell(avg, variance);
	if (maxValue < randValue)
	{
		maxValue = randValue;
    }
	if (minValue > randValue)
	{
		minValue = randValue;
    }
	i = i +1;
} while (i < 10000);

WScript.Echo(minValue);
WScript.Echo(maxValue);