const api = "http://localhost:0727/signup";

//Will become Get Users or I will turn this into a dynamic running 
// function for all queries 
const search= async(username,password,cpassword)=>{
   
  try { 
		console.log("Sending over to reciever:", {
			password: password,
			username: username,
			cpassword: cpassword
		});

		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},body: JSON.stringify({
				username: username,
				password: password,
				cpassword: cpassword
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
				// Handle fetch errors
			});
	
    return ;
 } catch(Err){
    console.log(Err);
 }
}

module.exports= {
    search
}
