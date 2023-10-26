

//1.Print odd numbers in an array//
var arr=[1,2,3,4,5,8,8,7,9,10];
var res=[];
var odd =(arr) =>
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



//3.Sum of all numbers in an array//
var arr=[1,2,4,5,5];
    var sum=0;
    var res =(arr)=>
    {
for(var i=0;i<arr.length;i++)
{
sum=sum+arr[i];

}
return(sum);

}
console.log(res(arr));
	
//4.Return all the prime numbers in an array//

var arr=[2, 3, 5, 7, 24,11, 30]
var i,j;
var count=0;
var res=[];
var prime=(arr)=>
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
//e.palindrome//
var arr=[1221,147,456,151];
var res=[];
var pal=(arr)=>
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
// str//
var str =["time is gold"];

var titlecap=(str)=>
{
 var str1 = str.toString().toLowerCase().split(' ');
  for(  var i=0;i<str1.length;i++)
  {
    str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
  }
  return str1.join(" ");
}
console.log(titlecap(str));
var resume=[{"Name":"Iswarya A",
             "qualification":"B.E Computer Science Engineering",
             "email":"aishwariyaanandhan@gmail.com",
             "Gender": "Female",
             "DOB": "22.12.1996",
             "College":"V.R.S. College of Engineering and Technology",
             "Martial Status": "Married",
             "Experience":"Fresher",
             "Address":"Chennai",
             "CGPA": "8",
             "Domain":"MERN Full stack development",
             "Hobbies":"Hand Crafting,Designing dress"}];

console.log(resume); // Resume Data in Object Format

resume.forEach(function() 
{
    console.log(JSON.stringify(resume)); // Resume Data in JSON Format
});

//for loop 
console.log(".......for loop.......");
for(i=0;i<user.length;i++)
{
   console.log(JSON.stringify(user[i]));          
} ;
