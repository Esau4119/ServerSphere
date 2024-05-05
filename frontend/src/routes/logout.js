const api = "http://localhost:0727/logout";

//Will become Get Users or I will turn this into a dynamic running 
// function for all queries 
const logout = async()=>{
   
  try { 
		fetch(api, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
			.then((response) => {
				console.log(response)
	
				return response.json();
			})
			.then((data) => {
				console.log("LOGOUT", data);
				sessionStorage.removeItem('user', JSON.stringify(data.Sesh))
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
    logout
}
