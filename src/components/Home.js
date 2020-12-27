import React from 'react'
import Graphs from '../images/Graphs.png'
import { Button } from 'react-bootstrap'
import Avatar from 'react-avatar'
// import Carousel from 'react-multi-carousel'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

const Home = () => {

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 1
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // }

  const transactions = [{
    name: 'Netflix',
    price: 20,
    date: '12/04/2020',
    category: 'Entertainment'
  }, {
    name: 'Amazon',
    price: 120,
    date: '12/04/2020',
    category: 'Miscellaneous'
  }, {
    name: 'Samsung',
    price: 230,
    date: '11/04/2020',
    category: 'Bill'
  }, {
    name: 'McDonalds',
    price: 15.99,
    date: '09/04/2020',
    category: 'Eating Out'
  }, {
    name: 'Tesco',
    price: 175.85,
    date: '08/04/2020',
    category: 'Grocery'
  }, {
    name: 'Travel expenses',
    price: 400,
    date: '07/04/2020',
    category: 'Holiday'
  }, {
    name: 'Asos',
    price: 130,
    date: '01/04/2020',
    category: 'Shopping'
  }, {
    name: 'Asda',
    price: 23,
    date: '19/03/2020',
    category: 'Grocery'
  }, {
    name: 'Uniqlo',
    price: 90.50,
    date: '18/03/2020',
    category: 'Shopping'
  }, {
    name: 'Thames Water',
    price: 90,
    date: '10/03/2020',
    category: 'Bill'
  }, {
    name: 'Louis Vuitton',
    price: 1300,
    date: '28/02/2020',
    category: 'Shopping'
  }, {
    name: 'Dyson',
    price: 200,
    date: '27/02/2020',
    category: 'Shopping'
  }, {
    name: 'Chanel',
    price: 2650,
    date: '27/02/2020',
    category: 'Shopping'
  }, {
    name: 'Taxi',
    price: 12.50,
    date: '27/02/2020',
    category: 'Transport'
  }, {
    name: 'Jason',
    price: 36,
    date: '20/02/2020',
    category: 'Person'
  }, {
    name: 'Dentist',
    price: 250,
    date: '19/02/2020',
    category: 'Personal Care'
  }, {
    name: 'Vitamins',
    price: 12,
    date: '18/02/2020',
    category: 'Personal Care'
  }, {
    name: 'Unicef',
    price: 20,
    date: '17/02/2020',
    category: 'Charity'
  }]

  const balance = 568.80

  return (
    <div className='wrapper home-wrapper'>
      <div className='home-LHS-container'>
        <div className='home-summary-card'>
          <div className='home-summary-card-balance'>
            <h2>£{balance}</h2>
            <p>Remaining</p>
            <Button variant='nav-theme'>Add Payment</Button>
          </div>
          <div className='home-summary-card-transactions'>
            {transactions.map((item,index) => {
              return (
                <div className='ind-transaction' key={index}>
                  <Avatar
                    name={item.name}
                    size='60'
                    round={true}
                    textSizeRatio={2}
                    className='avatar'
                  />
                  <div className='transaction-details'>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                  </div>
                  <div className='transaction-price'>
                    <p>£{item.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='home-RHS-container'>
        <div className='home-stats-container'>
          <h2>Spending Statistics</h2>
          <div className='home-graph-container'>
            <img src={Graphs}
              width='500'
            />
          </div>

          {/* <div>Graph goes here</div> */}
        </div>
        <div className='home-categories-container'>
          <h2>Expenditure - <span>Nov</span> - <span>£1,412</span></h2>
          <div className='icons-container'>
            {/* <CarouselProvider
              naturalSlideWidth={300}
              naturalSlideHeight={325}
              totalSlides={5}
              visibleSlides={3}
            >
              <Slider>
                <Slide index={0}className='grocery'>
                  <div className='icon' value='Grocery'>
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  <p>Grocery</p>
                </Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext> */}
            <div className='grocery'>
              <div className='icon' value='Grocery'>
                <i className="ri-shopping-cart-line"></i>
              </div>
              <p>Grocery</p>
            </div>
            <div className='shopping'>
              <div className='icon' value='Shopping'>
                <i className="ri-shopping-bag-line"></i>
              </div>
              <p>Shopping</p>
            </div>
            <div className='bill'>
              <div className='icon' value='Bill'>
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              <p>Bill</p>
            </div>
            <div className='entertainment'>
              <div className='icon' value='Entertainment'>
                <i className="ri-game-line"></i>
              </div>
              <p>Entertainment</p>
            </div>
            <div className='holiday'>
              <div className='icon' value='Holiday'>
                <i className="ri-plane-line"></i>
              </div>
              <p>Holiday</p>
            </div>
            <div className='transport'>
              <div className='icon' value='Transport'>
                <i className="ri-car-line"></i>
              </div>
              <p>Transport</p>
            </div>
            <div className='eatingOut'>
              <div className='icon' value='Eating Out'>
                <i className="ri-restaurant-line"></i>
              </div>
              <p>Eating Out</p>
            </div>
            <div className='charity'>
              <div className='icon' value='Charity'>
                <i className="ri-service-line"></i>
              </div>
              <p>Charity</p>
            </div>
            <div className='person'>
              <div className='icon' value='Person'>
                <i className="ri-user-line"></i>
              </div>
              <p>Person</p>
            </div>
            <div className='personalCare'>
              <div className='icon' value='Personal Care'>
                <i className="ri-heart-line"></i>
              </div>
              <p>Personal Care</p>
            </div>
            <div className='miscellaneous'>
              <div className='icon' value='Miscellaneous'>
                <i className="ri-question-mark"></i>
              </div>
              <p>Miscellaneous</p>
            </div>
            {/* </CarouselProvider> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
