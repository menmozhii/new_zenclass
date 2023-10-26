var resume=[{"Name":"mary",
             "qualification":"B.E (EEE)",
             "email":"mary123@gmail.com",
             "Gender": "Female",
             "DOB": "xxx",
             "College":"Kongu Engineering college",
             "Martial Status": "Married",
             "Experience":"Fresher",
             "Address":"Chennai",
             "CGPA": "8",
             "Domain":"MERN Full stack development",
             "Hobbies":"reading"}];

console.log(resume); // Resume Data in Object Format

resume.forEach(function() 
{
    console.log(JSON.stringify(resume)); // Resume Data in JSON Format
});