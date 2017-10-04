/*global google*/
import React from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from "react-google-maps";

const VehicleMap = withGoogleMap(props => (
 <GoogleMap
   defaultZoom={2}
   defaultCenter={props.center}
 >

 {props.markers.map((marker, index) => (
     <Marker
       key={index}
       position={marker.position}
     />
   ))}

 </GoogleMap>
));

export default class VehicleLocationMap extends React.Component {

  render(){

    var locationData = [];
    for(let count = 0; count<this.props.mapData.length; count++){
      locationData.push(
        {
          position: new google.maps.LatLng(this.props.mapData[count].latitude, this.props.mapData[count].longitude)
        }
      );
    }

    return(
      <VehicleMap
         containerElement={
             <div style={
               {
                 position: 'absolute',
                 top: 133,
                 left: 0,
                 right: 0,
                 bottom: -400,
                 justifyContent: 'flex-end',
                 alignItems: 'center',
               }
              } />
           }
           mapElement={
               <div style=
               {
                 {
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                 }
               } />
           }
           center={
             {
                lat: this.props.mapData[0].latitude,
                lng: this.props.mapData[0].longitude,
             }
           }
           markers={locationData}
     />
    );
  }
}
