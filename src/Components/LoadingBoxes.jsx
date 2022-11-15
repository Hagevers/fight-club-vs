import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBoxes = (props) => (
    <ContentLoader
    width={450}
    height={400}
    speed={1}
    viewBox="0 0 450 400"
    backgroundColor="#3f2c52"
    foregroundColor="#4d2c5e"
    {...props}
  >
    <rect x="42" y="77" rx="10" ry="10" width="450" height="400" />
  </ContentLoader>
)

export default LoadingBoxes