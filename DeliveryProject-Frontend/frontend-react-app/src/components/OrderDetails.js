import React from "react";
import { List, Row, Col, Button, Spin } from 'antd';
import { Link } from "react-router-dom";
import moment from "moment";
import Map from "./MapDirectionsRenderer";
import Geocode from "react-geocode";
import MapDirectionsRenderer from "./MapDirectionsRenderer";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { isVar } from "@babel/types";


//In this page, left part is text information of a sigle order
//Right part is a map
export default class OrderDetails extends React.Component {

    getdata = () => {
        return this.props.location.state
    }

    getGoogleFromAddress = () => {  
       Geocode.fromAddress(this.props.location.state.fromAddress)
            .then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log('lat long', typeof (lat), typeof (lng));
                    this.setState({
                        places: [...this.state.places, { latitude: lat, longitude: lng }]
                    })
                },
                (error) => {
                    console.error(error);
                }
            );
    }


    getGoogleToAddress = () => {
        Geocode.fromAddress(this.props.location.state.toAddress)
        .then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    places: [...this.state.places, { latitude: lat, longitude: lng }]
                })
            },
            (error) => {
                console.error(error);
            }
        );
    }
    componentDidMount() {
        console.log("mounting...");
        Geocode.setApiKey("AIzaSyAPerW4DlNN3JvRMUkGesnBFi6HBwpMbDs");

        // set response language. Defaults to english.
        Geocode.setLanguage("en");
        // Get latitude & longitude from address.
        // Add latitude and longitude to state.places with the format
        // {latitude: ..., longitude: ...}
        // fromAddress is added first because it is the source
        // toAddress is added after with the syntax ...this.state.places
        // because it is the destination. The first member of the array
        // is interpreted as the source, and the last as the destination later.
        console.log('testdata', this.props.location.state)
  
        Promise.all([this.getGoogleFromAddress(), this.getGoogleToAddress()])
        .catch(err => console.error(err));
    }

    state = {
        places: [
        ]
    }

    renderloading = () => {
        //provide loading circle and center it in the page.
        return <Spin tip="Loading..." className="order-history-loading" style={{ marginTop: '45vw', marginLeft: '45vh' }} />
    }

    render() {
        //console.log('response');
        var mapUrl = "https://maps.googleapis.com/maps/api/js?"
        const key = "AIzaSyAPerW4DlNN3JvRMUkGesnBFi6HBwpMbDs"
        mapUrl += "&key=" + key;
        this.getdata();
        var data = this.getdata();
        data = [data];
        //console.log('data', data);

        var { places } = this.state;
        // If places.length < 2, the two locations have not been added to this.state.places yet
        if (places.length < 2) {
            return this.renderloading()
        }
        // A list that displays order information.
        return (
            <> 
                <List
                    style={{ marginTop: '10vh', borderColor: 'transparent' }}
                    size="large"
                    //header={<div><h3 style = {{left : '10vw', position : 'absolute', marginBottom : '30vh', top : '0vh'}}>Order History</h3></div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <div style={{
                        width: '45vw', height: '80vh', backgroundColor: 'whitesmoke',
                        marginTop: '-1vh', borderRadius: '0px', left: '5vw', position: "absolute"
                    }}><List.Item>{
                        <>
                            <h1 style={{ left: '2vw', position: 'absolute', top: '5vh' }}>Order Details</h1>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '13vh' }}><b>Order Number</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '13vh' }}>{item.orderId}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '18vh' }}><b>Created Time</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '18vh' }}>{moment.unix(item.createTime / 1000).format("MM/DD/YYYY HH:mm")}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '23vh' }}><b>From</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '23vh' }}>{item.senderName}</h4>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '27vh' }}>{item.senderPhoneNumber}</h4>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '31vh' }}>{item.fromAddress}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '36vh' }}><b>To</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '36vh' }}>{item.recipientName}</h4>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '40vh' }}>{item.recipientPhoneNumber}</h4>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '44vh' }}>{item.toAddress}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '49vh' }}><b>Size</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '49vh' }}>{item.size}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '54vh' }}><b>Weight</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '54vh' }}>{item.weight}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '59vh' }}><b>By</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '59vh' }}>{item.deliveryMethod}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '64vh' }}><b>Deliver Time</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '64vh' }}>{moment.unix(item.deliveryTime / 1000).format("MM/DD/YYYY HH:mm")}</h4>

                            <h3 style={{ left: '2vw', position: 'absolute', top: '69vh' }}><b>Fee</b></h3>
                            <h4 style={{ left: '17vw', position: 'absolute', top: '69vh' }}>$ {item.totalCost}</h4>

                        </>
                    }</List.Item></div>}
                />
                {places.length >= 2 &&
                    <Map
                        googleMapURL={
                            'https://maps.googleapis.com/maps/api/js?key=' +
                            key +
                            '&libraries=geometry,drawing,places'
                        }

                        // arr.slice(Math.max(arr.length - 5, 1))
                        markers={places}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: "45vh", width: "40vw", marginLeft: '55vw' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter={{ lat: 37, lng: -122 }}
                        defaultZoom={7 || 11}
                        droneOrRobot={data[0].deliveryMethod}
                    />}
            </>
        )
    }
}

/*<MyMapComponent

            isMarkerShown
            googleMapURL={mapUrl}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`, width: `40vw`, marginLeft: '55vw' }} />}
            mapElement={<div style={{ height: `100%` }} />}
             />
             */