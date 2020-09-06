import React from "react";

function Jumbotron ({children}){
    const background = "./images/google_books.jpg"

    return (
        <div 
            style={{clear:"both",marginTop:30,
                color: "#ff3300",
                paddingTop: 120, 
                paddingBottom: 120, 
                textAlign: "center",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: "url(" + background + ")"
                }}
            className="jumbotron border">
            {children}
        </div>
    )
}

export default Jumbotron