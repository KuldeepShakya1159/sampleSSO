import React from "react";

const Home = ()=>{

    const signInWithGoogleBtn = ()=>{
        window.location.href="http://localhost:5000/google/auth"
    }
    return(
        <div>
            Homee
            <button onClick={signInWithGoogleBtn}>SignInWithGoogle</button>
        </div>
    )
}

export default Home;