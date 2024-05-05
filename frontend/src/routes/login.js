const api = "http://localhost:0727/login";

//Will become Get Users or I will turn this into a dynamic running 
// function for all queries 
const login= async(username,password)=>{
   
  try { 
		console.log("Sending over to reciever:", {
			password: password,
			username: username,
		
		});
		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},body: JSON.stringify({
				username: username,
				password: password,
			})
		})
			.then((response) => {
				console.log(response)
				return response.json();
			})
			.then((data) => {
				console.log("Response data:", data);
			})
			.catch((error) => {
				console.log("Error during fetch operation:", error );
			});
	
    return ;
 } catch(Err){
    console.log(Err);
 }
}

module.exports= {
    login
}
