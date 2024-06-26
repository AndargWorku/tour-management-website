import React,{ useState} from 'react'
import {Container, Row, Col} from "reactstrap"
import {useLocation} from "react-router-dom"
import TourCard from '../shared/TourCard'
import CommonSection from './../shared/CommonSection'
import Newletter from "./../shared/Newsletter"
const SearchResultList = () => {

  const location=useLocation()
  const [data]=useState(location.state)
 

  return (
    <div>
      <CommonSection title={'Tour Search Result'}/>
      <section>
        <Container>
          <Row>
            {
              data===0 ? (
                <h4>no tour found</h4>

              ):(
                data?.map(tour=>(
                  <Col lg="3" className='mb-4' key={tour._id}>
                    <TourCard tour={tour}/>
                  </Col>
                ))
              )
            }

          </Row>
        </Container>
      </section>
      <Newletter/>
    </div>
  )
}

export default SearchResultList
