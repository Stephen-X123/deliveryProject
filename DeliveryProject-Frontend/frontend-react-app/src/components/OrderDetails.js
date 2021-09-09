import React from "react";
import { List, Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";
const data = [
    {'order_number' : "364179604",
    'created_time' : "08:00 AM 08/23/2021",
    'sender' : "Rick Sun",
    'sender_telphone': "949-123-4567",
    'sender_address': "800 N Alameda St, Los Angeles, CA, 90012",
    'receiver' : "Sean",
    'receiver_telephone' :'946-666-6666',
    'receiver_address' : '453 Spring Street, Los Angeles, CA 90013',
    'actual_pick_up_time' : "08:00 AM 08/24/2021",
    'size' : "Small (L : 10 , W : 10, H : 10)",
    'weight' : "Light (< 5 lb)",
    'deliveror' : "Drone",
    'deliver_time' : "9:00 AM",
    'fee' : "30"}
    ];

export default class OrderDetails extends React.Component {
    
    render(){
        return (
            <>
                
                <List
        style = {{marginTop: '10vh', borderColor : 'transparent'}}
        size="large"
        //header={<div><h3 style = {{left : '10vw', position : 'absolute', marginBottom : '30vh', top : '0vh'}}>Order History</h3></div>}
        bordered
        dataSource={data}
        renderItem={item => <div style = {{width : '45vw' , height : '80vh', backgroundColor : 'whitesmoke', 
        marginTop : '-1vh', borderRadius : '0px', left : '10vw', position : "absolute"}}><List.Item>{
          <>
            <h1 style = {{left : '2vw', position : 'absolute', top : '5vh'}}>Order Details</h1>
            
            <h3 style = {{left : '2vw', position : 'absolute', top : '13vh'}}><b>Order Number</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '13vh'}}>{item.order_number}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '18vh'}}><b>Created Time</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '18vh'}}>{item.created_time}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '23vh'}}><b>From</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '23vh'}}>{item.sender}</h4>
            <h4 style = {{left : '17vw', position : 'absolute', top : '27vh'}}>{item.sender_telphone}</h4>
            <h4 style = {{left : '17vw', position : 'absolute', top : '31vh'}}>{item.sender_address}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '36vh'}}><b>To</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '36vh'}}>{item.receiver}</h4>
            <h4 style = {{left : '17vw', position : 'absolute', top : '40vh'}}>{item.receiver_telephone}</h4>
            <h4 style = {{left : '17vw', position : 'absolute', top : '44vh'}}>{item.receiver_address}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '49vh'}}><b>Size</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '49vh'}}>{item.size}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '54vh'}}><b>Weight</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '54vh'}}>{item.weight}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '59vh'}}><b>By</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '59vh'}}>{item.deliveror}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '64vh'}}><b>Deliver Time</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '64vh'}}>{item.deliver_time}</h4>

            <h3 style = {{left : '2vw', position : 'absolute', top : '69vh'}}><b>Fee</b></h3>
            <h4 style = {{left : '17vw', position : 'absolute', top : '69vh'}}>$ {item.fee}</h4>

            
         

          
          </>
          }</List.Item></div>}
        />

            </>
        )

    }
}