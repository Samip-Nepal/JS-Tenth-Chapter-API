let catfacts=document.querySelector("#catfacts");
let facts=document.querySelectorAll(".para");
let url="https://cat-fact.herokuapp.com/facts";
 
/*const getfacts = async ()=>{
    console.log("Getting data.....");
   let resposnse=await fetch(url);
   console.log(resp);
  let data=  await resposnse.json();
  facts.innerText=data[0].text;
    
};*/
  function getfacts()
  { fetch(url)
    .then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
    facts.innerText=data[0].text;
  });
}
catfacts.addEventListener("clicks",getfacts);