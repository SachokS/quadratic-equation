module.exports = function solveEquation(equation)
{
var a1="";
var b1="";
var c1="";
var d;
var x1=undefined;
var x2=undefined;

var damn = equation.split('*');
var a = damn[0];
a1 = Number(a);

var b = damn[1];
b=b.split('');
b=b.splice(5,b.length-1);
b.pop();
for(var i = 0;i<b.length;i++)
{
if(i!=1)
	{
b1+=b[i];
	}
}
b1 = Number(b1);

var c = damn[2];
c=c.split('');
if(c[3]!='-')
{
c=c.splice(4,c.length-1);
for(var i = 0;i<c.length;i++)
{
c1+=c[i];
}
c1 = Number(c1);
}
if(c[3]=='-')
{
c=c.splice(4,c.length-1);
for(var i = 0;i<c.length;i++)
{
c1+=c[i];
}
c1 = (-1)*c1;
}
d=b1*b1-4*a1*c1;
if(d>0)
{
	x2=Math.round(-(b1-Math.sqrt(d))/(2*a1));
  x1=Math.round(-(b1+Math.sqrt(d))/(2*a1));
}
if(d=0)
{

x2=b1/(2*a1);
x1=x1;

}

if(x1>x2)
{

var solutions=[x2,x1];
}
else
{

var solutions=[x1,x2];
}
return solutions;

}
