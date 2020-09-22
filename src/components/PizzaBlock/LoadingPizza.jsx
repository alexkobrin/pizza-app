import React from 'react'
import ContentLoader from "react-content-loader";



function LoadingPizza() {
    
        return (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="267" rx="8" ry="8" width="260" height="16" /> 
    <rect x="0" y="293" rx="8" ry="8" width="260" height="83" /> 
    <rect x="0" y="401" rx="8" ry="8" width="90" height="30" /> 
    <rect x="123" y="391" rx="36" ry="36" width="145" height="50" />
  </ContentLoader>
  )

   
}

export default LoadingPizza
