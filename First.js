let url="https://cat-fact.herokuapp.com/facts";
 
const getfacts = async ()=>{
    console.log("Getting data.....");
    let resp=await fetch(url);
    console.log(resp);
    
};
getfacts();