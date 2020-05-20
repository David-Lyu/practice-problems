import React, {Component} from "react";
import ReactDom from "react-dom";

class Googly extends React.Component{
  constructor(props){
    super(props)
    this.googleMapRef = React.createRef()
  }

  initMap(){
    new google.maps.Map(this.googleMapRef.current, {
    zoom: 16,
    center: {
      lat: 33.98803869999999,
      lng: -117.90458940000001
    },
  })}

  componentDidMount(){
    const googleMapScript = document.createElement("script")
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=APIKEY&libraries=places`;
    googleMapScript.defer = true;
    googleMapScript.async = true;

    window.document.body.appendChild(googleMapScript)
    googleMapScript.addEventListener('load', ()=> this.initMap())
  }
  render(){
    return (
    <div
      id="map"
      ref={this.googleMapRef}
      style={{width: '400px', height:"300px"}}
    />
    )
  }
}

ReactDom.render(
  <Googly/>,
  document.getElementById("root")
)
