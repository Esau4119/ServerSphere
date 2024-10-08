const api = "http://localhost:0727/messages";


const Msg= async(username,message)=>{
   
  try { 
		console.log("Sending over to reciever:", {
            username: username,
            message: message,
		
		});
		fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},body: JSON.stringify({
				username: username,
				message: message,
			})
		})
			.then((response) => {
				console.log(response)
				return response.json();
			})
			.then((data) => {
				if(data.Success && data.Ran){
					console.log("Route-Messages:", data)
					//Can add something to push user to sign up
					window.location.href ="/";
				}else if(data.Success){
					console.log("Route-Messages:", data)
					
					window.location.href ="/";
				}else if(data.Fail){
					console.log("failed Message:", data.Fail)
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
    Msg
}
