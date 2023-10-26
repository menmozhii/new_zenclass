//Do the below programs in anonymous function & IIFE//
//1.Print odd numbers in an array--anonymus function//
var arr=[1,2,3,4,5,8,8,7,9,10];
var res=[];
var odd = function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2!=0)
    {
      res.push(arr[i]);
    }
  }
      return(res);
    }

  
  console.log(odd(arr));

  //IIFE  oddfunction//

  
  var arr=[8,9,7,4,5];
  var res=[];
  (function(arr)
  {
  for  (var i=0;i<arr.length;i++)
  {
  if(arr[i]%2!=0)
  {
  res.push(arr[i]);
  }
  }
  console.log(res);
  })(arr);
  
  

//2.Convert all the strings to title caps in a string array -anonymous function//

var str =["time is gold"];

var titlecap=function(str)
{
 var str1 = str.toString().toLowerCase().split(' ');
  for(  var i=0;i<str1.length;i++)
  {
    str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
  }
  return str1.join(" ");
}
console.log(titlecap(str));
//IIFEfunction an array//
var str =["time is gold"];

(function(str)
{
 var str1 = str.toString().toLowerCase().split(' ');
  for(  var i=0;i<str1.length;i++)
  {
    str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
  }
 console.log( str1.join(" "));
})(str);

//3.Sum of all numbers -anony fun//
var arr=[1,2,4,5,5];
    var sum=0;
    var res = function(arr)
    {
for(var i=0;i<arr.length;i++)
{
sum=sum+arr[i];

}
return(sum);

}
console.log(res(arr));

//sum -IIFE//
var arr=[1,2,3,4,8,8,9,10];
     var sum=0;
     
     
(function (arr)
{
 
  
  for ( var i=0;i<arr.length;i++)
  {
    sum=sum+ arr[i]
    
  }
  console.log(sum);
    })(arr);
    //4.Return all the prime numbers in an array//
   //anonymous function//
   var arr=[2, 3, 5, 7, 24,11, 30]
var i,j;
var count=0;
var res=[];
var prime=function(arr)
{
  {
  for( var i=0;i<arr.length;i++)
  
  {
    for( var j=2;j<=arr[i];j++)
    {
      if(arr[i]%j == 0)
       {
        count ++;
      }
     
    }
    
     if(count==1)
    
   {
     res.push(arr[i]);
   
   }
    count=0;
  }
  
return res;
  }
  }
console.log(prime(arr));
//IIFE function//
var arr=[2, 3, 5, 7, 24,11, 30]
var i,j;
var count=0;
var res=[];
(function(arr)
{
  {
  for( var i=0;i<arr.length;i++)
  
  {
    for( var j=2;j<=arr[i];j++)
    {
      if(arr[i]%j == 0)
       {
        count ++;
      }
     
    }
    
     if(count==1)
    
   {
     res.push(arr[i]);
   
   }
    count=0;
  }
  
console.log(res);
  }
  })
  (arr)





//5.Return all the palindromes in an array//
// anonymous function//
var arr=[1221,147,456,151];
var res=[];
var pal=function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    var rev=( arr[i].toString().split('').reverse().join(''))
    {
      
      
      if(arr[i]==rev)
      {
        res.push(arr[i]);
      }
    }
   
  }
 return(res);
} 
console.log(pal(arr));

//IIFE function//
var arr=[121,1456,852,22122];
var res=[];
(function pal(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    var rev=arr[i].toString().split("").reverse().join("");
    {
      if(arr[i]==rev)
      res.push(arr[i]);
      
    }
    }
  console.log(res);  
})
(arr);
    

//6.Return median of two sorted arrays of the same size.//

var a=[4,5];
var b=[3,7];
var c=(a.concat(b));
var d=c.sort();
var median;

var arr = function(d)
{
 
  let midIndex  = ((d.length)/2);
    
      median=(((d[midIndex])+(d[midIndex]-1))/2);

   
    return(median);
}

console.log(arr(d));
//median IIFE function//

var a=[4,5];
var b=[3,7];
var c=(a.concat(b));
var d=c.sort();
var median;

(function(d)
{
 
  let midIndex  = ((d.length)/2);
    
      median=(((d[midIndex])+(d[midIndex]-1))/2);

   
    console.log(median);
})(d);
//7.Remove duplicates from an array//

var arr=['a','b','c','a','b'];
 var occ= arr.slice().sort();
var res=[];
var dup=function(arr)
{
 for( var i=0;i<occ.length-1;i++)
 {
   if(occ[i+1]===occ[i])
   {
     res.push(occ[i]);
   }
 }
 return res;
}
  console.log(dup(arr));
  // IIFE function//


//Rotate an array by k times//
var arr=[1,2,3,4,5];
var num=3;
var res=[];
var rot =function(arr)
{
  for(var i=1;i<=num;i++)
  {
    
    arr.unshift(arr.pop());
    res.push(arr)
  }
  return(arr);
}
console.log(rot(arr));