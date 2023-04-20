'use client'
import Script from 'next/script'
import {useEffect, useState} from 'react'

 const  Page =() => {
  const [isReady,setReady] = useState(false);
  function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    console.log(response.credential)
    // const responsePayload = decodeJwtResponse(response.credential);

    // console.log("ID: " + responsePayload.sub);
    // console.log('Full Name: ' + responsePayload.name);
    // console.log('Given Name: ' + responsePayload.given_name);
    // console.log('Family Name: ' + responsePayload.family_name);
    // console.log("Image URL: " + responsePayload.picture);
    // console.log("Email: " + responsePayload.email);
 }

  useEffect(() => {
    if(isReady) {

      google.accounts.id.initialize({
        client_id: "828354632532-dunbg3josj4hkmasmr4o0pfgg01il6b1.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
    }
    
  },[isReady])

  return (
    <div>
      <Script src="https://accounts.google.com/gsi/client" async defer onLoad={()=>setReady(true)}></Script>
      <div id='buttonDiv'></div>
    </div>
  )
}

export default Page;
