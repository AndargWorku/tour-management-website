import React from 'react'
import ServicesCard from "./ServicesCard"
import {Col} from "reactstrap"
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Calculate Weather',
        desc:'weather is the bast way to alculate the way to descvore know the to calculate '
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:'loren isperum to know the wat to know is descover ',
    },
    {
        imgUrl:customizationImg,
        title:'customization',
        desc:'loarn the descovery sit ament to des everything consider to know the '
    }
]
const ServicesList = () => {
  return (
    <>
      {
        servicesData.map((item,index)=>(
            <Col lg='3' key={index}>
                <ServicesCard item={item}/>
            </Col>
        ))
      }
    </>
  )
}

export default ServicesList
