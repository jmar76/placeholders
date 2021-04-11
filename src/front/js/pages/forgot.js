import React, { useState } from "react";
 
export const forgot = props => {
    const [ëmail, setEmail] = useState(""),

    function requestForgotPassword(event) {
        event.preventDefault();
        fetch("https://3001-coffee-parrot-7llnb4t6.ws-eu03.gitpod.io/api/forgot-password", {
        method:"POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            email:email
        })
            }),
}
}

let errorEmailHTML = "";
if (emailError) {
    errorEmailHTML = {
        <div>
        <div>Email obligatorio</div>
            </div>

    }
}



	return (
		<div className="junbotron">
            <form>
                <label>
                    Correo Electronico
                    <input type="email" onChange={(event) => {setEmail(event.target.value)}} /> 
                </label> 
                  <input type="button" value="Recuperar" onClick={requestForgotPassword} />

            </form>
			 
		</div>
	);
};
