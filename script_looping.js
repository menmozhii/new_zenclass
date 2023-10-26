var carname=[
    {"name":"tata","model":"tiago","year":"2014",
    "fuel":"petrol","weight":"900"},

    {"name":"ford","model":"fiesta","year":"2015",
    "fuel":"disel","weight":"1000"},

    {"name":"honda","model":"amaze","year":"2018",
    "fuel":"petrol","weight":"1100"}]
    //for loop //
    for(var i=0;i<carname.length;i++)
    {
      console.log(carname[i].name,carname[i].year);
      }	    
      //for in //
      for( var i in carname)
      {
          console.log(i,carname[i]);
      }

      // for of //

      //The JavaScript for of statement loops through the values of an iterable object.//
      const cars = ["BMW", "Volvo", "Mini"];
      let text = "";
for (let x of cars) {
  text += x +"";
}
console.log(text);

      // for each //
      // forEach() calls a function for each element in an array //
     let sum =0;
     const numbers= [1,2,3,4,5];
     numbers.forEach(foo);
      function foo(item)
      {
        sum += item;
      }
      console.log("sum is " + sum);