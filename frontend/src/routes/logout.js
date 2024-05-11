const api = "http://localhost:0727/logout";

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
				window.location.href ="/";
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
