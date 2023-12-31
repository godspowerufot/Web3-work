import React, { useEffect } from "react"
import "./contact.css"

function Contact(){
  return (
    <>
      <div>
        <div className="containerContact">
            <div className="secondContact">
            <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 100">
<title>Plotzes</title>
<g transform="matrix(0 -.1 .1 0 0 100)">
<path d="M44.296 446.293s150.017 135.58 408.206 135.58 408.206-135.58 408.206-135.58 235.57 320.8-35.64 425.43-372.567-289.85-372.567-289.85" fill="none" stroke="var(--main-color)" stroke-width="88.59" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="200.422" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
<circle cx="752.323" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
</g>
<text transform="matrix(12.59846 0 0 12.59846 -1445.293 -307.27)" font-size="10.583" font-family="Quicksand" fill="var(--main-color)">
<tspan x="122.645" y="32.221">lotzes</tspan>
</text>
</svg>
<div className="ContactPage" style={{marginTop:"30px"}}>
    
"You can contact me via the follow services:"
<ul style={{margin:"0", listStyleType:"none"}}>
<li>
<svg style={{Display:"inline-block", Position:" relative", top: "10px"}} width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<title>Discord</title>
<path d="M81.9 83.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" fill="var(--main-color)"></path>
<path d="M167 0H33C21.7 0 12.5 9.2 12.5 20.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9L166 181l21.5 19V20.6C187.5 9.2 178.3 0 167 0zm-38.6 130.6l-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8l-6.7 8.3c-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3C71 46.3 84.7 46.6 84.7 46.6l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9C76 53.3 84.5 52 88 51.7c.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" fill="var(--main-color)"></path>
</svg>
<a href="/discord" target="_blank">Click here to shoot me a message on Discord!</a>
<span style={{color:"grey"}}><em>Preferred method!</em></span>
</li>
<li>
<svg style={{Display:"inline-block", Position:" relative", top: "10px"}} width="30px" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
<title>Twitter</title>
<g>
<path d="m78.62 226.57c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-0.15-6.63a104.36 104.36 0 0 0 25.59-26.551 102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093s-31.032 34.266-25.795 56.874a145.62 145.62 0 0 1-105.7-53.591c-13.614 23.436-6.66 53.42 15.88 68.47a50.91 50.91 0 0 1-23.28-6.42v0.65c7e-3 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16 0.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22c-4.08-8e-3 -8.158-0.255-12.2-0.74a145.21 145.21 0 0 0 78.62 23" fill="var(--main-color)"></path>
</g>
</svg>
<a href="/twitter" target="_blank">Click here to go to my Twitter profile!</a>
</li>
</ul>


</div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Contact