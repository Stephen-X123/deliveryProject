/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  DirectionsRenderer,
  Polyline
} from "react-google-maps";

class MapDirectionsRenderer extends React.Component {
  state = {
    directions: null,
    error: null
  };

  componentDidMount() {
    /*
      pass all points you wish to route through markers in the class that calls Map component, 
      which will in turn be turned into MapDirectionsRendered's props.places through this call.
      <MapDirectionsRenderer
          places={props.markers}
          travelMode={google.maps.TravelMode.DRIVING}
        />. 
        Format of places should be [{lat: ..., lng: ...},...];
      This function puts all coordinates into something that can be routed(waypoints)
      traveLMode is just a string such as "DRIVING" or "WALKING".
    */
    const { places, travelMode } = this.props;
    const waypoints = places.map(p => ({
      location: { lat: p.latitude, lng: p.longitude },
      stopover: true
    }))
    //shift gives first element of array.
    const origin = waypoints.shift().location;
    //pop gives last element of array
    const destination = waypoints.pop().location;


    const directionsService = new google.maps.DirectionsService();
    //routing based on waypoints and setting directions to be used in map
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          this.setState({ error: result });
        }
      }
    );
  }

  render() {
    //if error not null means error occured in routing => this.setState({error: result})
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    //if directions not null means directions was set successfully so directions can be used as props.
    //directions is the route that connects places.
    return (this.state.directions && <DirectionsRenderer directions={this.state.directions} />)
  }
}

/*
  Map is a functional component.
  withScriptjs and withGoogleMap both return components and are
  Higher Order Components. (Takes in a component to return a component)
  The end result Map is a component.
  withScriptjs and withGoogleMap are required for google map api to run correctly.
*/
const Map = withScriptjs(
  withGoogleMap(props => {
    console.log('props',props);
    return (
    <div className='map-container'>
      {/* Default center is at the center of San Francisco. */}
      <GoogleMap
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={11.9}
      >
        {/* Our three stations in SF. */}
        <Marker
          position={{ lat: 37.754531563865626, lng: -122.48217070185396 }}
        />

        <Marker
          position={{ lat: 37.79011368347067, lng: -122.42337030185325 }}
        />

        <Marker
          position={{ lat: 37.732519384843485, lng: -122.40894663393345 }}
        />

        {/* Receive mode of transport from OrderDetails ("drone"/"robot"),
            If transport is drone, then draw a straight line (drones can fly).
            If transport is robot, then draw a route.   */}
        {/* Draw a line between origin and destination (sender address and receiving address) */}
        {
          props.droneOrRobot === "drone" && 
          <Marker
          position={{ lat: props.markers[0].latitude, lng: props.markers[0].longitude }}
          />
        }
        {
          props.droneOrRobot === "drone" && 
          <Marker
          position={{ lat: props.markers[1].latitude, lng: props.markers[1].longitude }}
          />
        }
        {
          props.droneOrRobot === "drone" && 
          <Polyline 
            path = {[{lat:props.markers[0].latitude, lng:props.markers[0].longitude}, 
            {lat:props.markers[1].latitude, lng:props.markers[1].longitude} ]}
          />
       }

        {props.markers.map((marker, index) => {
          const position = { lat: marker.latitude, lng: marker.longitude };
        })}
        {props.droneOrRobot === "robot" && <MapDirectionsRenderer
          places={props.markers}
          travelMode={google.maps.TravelMode.DRIVING}
        />}
      </GoogleMap>
    </div>
    )
  }
  ) 
);

export default Map;
