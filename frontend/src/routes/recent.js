const api = "http://localhost:0727/messages/recent";

const Recent= async()=>{
   
  try { 
		console.log("Getting recent")
		fetch(api, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
                document.getElementById("messageContainer").innerHTML = `
                <h1>Recent</h1>
                <p><strong>Username:</strong> ${data.name}</p>
                <p><strong>Message:</strong> ${data.Message}</p>
            `;
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
    Recent
}
