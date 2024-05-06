const api = "http://localhost:0727/login";

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
				if(data.Sesh.user){
					console.log("In LOGIN:", data.Sesh)
					sessionStorage.setItem('user', JSON.stringify(data.Sesh))
				}else if(data.Fail){
					console.log("failed Login:", data.Fail)
					sessionStorage.removeItem('user', JSON.stringify(data.Sesh))
				}
				
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
