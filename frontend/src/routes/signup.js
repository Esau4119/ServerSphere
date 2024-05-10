const api = "http://localhost:0727/signup";

const signUp= async(username,password,cpassword)=>{
   var reqData;
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
				// console.log(response)
	
				return response.json();
			})
			.then((data) => {
				//console.log("Response data:", data);
				if(data.Sesh.user){
					console.log("Route-SIGN UP:", data.Sesh)
					reqData = data.Sesh
					// storing user and switching screens
					sessionStorage.setItem ('user', JSON.stringify(data.Sesh.user))
					window.location.href ="/";
				}else if(data.Fail){
					console.log("failed signup:",data.Fail)
					sessionStorage.removeItem('user', JSON.stringify(data.Sesh))
				}
			})
			.catch((error) => {
				console.log("Error during fetch operation:", error );
				// Handle fetch errors
			});
	
    return	JSON.stringify(reqData) ;
 } catch(Err){
    console.log(Err);
 }
}

module.exports= {
    signUp,
	
}
