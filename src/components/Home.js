import React from 'react'
import { Button } from 'react-bootstrap'
import Avatar from 'react-avatar'
import Carousel from 'react-multi-carousel'

import {
  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ComposedChart, ResponsiveContainer, Area
} from 'recharts'


//* Incoming spend data have to come in as 1 array made up of individual arrays each containing 1 object (that contains the month spend)
const Home = () => {

  const [category, setCategory] = React.useState(null)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <h2 className='label-heading'>{label}</h2>
          <p className="label-spent">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="label-saved">{`${payload[1].name} : ${payload[1].value}`}</p>
        </div>
      )
    }
    return null
  }

  const data = [
    {
      name: 'Jan', Spent: 400, Saved: 600
    },
    {
      name: 'Feb', Spent: 300, Saved: 1700
    },
    {
      name: 'Mar', Spent: 200, Saved: 800
    },
    {
      name: 'Apr', Spent: 278, Saved: 722
    },
    {
      name: 'May', Spent: 189, Saved: 811
    },
    {
      name: 'Jun', Spent: 239, Saved: 761
    },
    {
      name: 'Jul', Spent: 349, Saved: 651
    },
    {
      name: 'Aug', Spent: 200, Saved: 800
    },
    {
      name: 'Sept', Spent: 278, Saved: 722
    },
    {
      name: 'Oct', Spent: 189, Saved: 811
    },
    {
      name: 'Nov', Spent: 239, Saved: 761
    },
    {
      name: 'Dec', Spent: 349, Saved: 651
    }
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

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
    category: 'Food & Drink'
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

  const categoryHandler = (e) => {
    setCategory(e.target.id)
  }

  const filterCategories = (transaction) => {
    return transaction.category === category
  }

  const mapTransactions = (transaction, index) => {
    return (
      <div className='ind-transaction' key={index}>
        <Avatar
          name={transaction.name}
          size='60'
          round={true}
          textSizeRatio={2}
          className='avatar'
        />
        <div className='transaction-details'>
          <p>{transaction.name}</p>
          <p>{transaction.date}</p>
        </div>
        <div className='transaction-price'>
          <p>£{transaction.price}</p>
        </div>
      </div>
    )
  }

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
            {category === null ?
              transactions
                .map(mapTransactions)
              :
              transactions
                .filter(filterCategories)
                .map(mapTransactions)
            }
          </div>
        </div>
      </div>
      <div className='home-RHS-container'>
        <div className='home-stats-container'>
          <h2>Spending Statistics</h2>
          <div className='home-graph-container'>
            <ResponsiveContainer
              width='90%'
              height={300}
            >
              <ComposedChart
                data={data}
                barCategoryGap='30%'
                margin={{
                  top: 20, right: 40, bottom: 20, left: 40
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide={true} />
                <Tooltip cursor={false} offset={30} content={CustomTooltip} />
                <Legend />
                <Bar dataKey="Spent" stackId="a" fill="#00ACBD" radius={[0, 0, 10, 10]}animationDuration={1500}/>
                <Bar dataKey="Saved" stackId="a" fill="#EBAC7F" radius={[10, 10, 0, 0]} animationDuration={1500}/>
                <Area type="monotone" dataKey="Spent" stroke="#00BD35" dot={false} legendType="none" fill="#00ACBD" fillOpacity={0.2} strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='home-categories-container'>
          <h2>Expenditure - <span>Nov</span> - <span>£1,412</span></h2>
          <div className='icons-container'>
            <Carousel
              responsive={responsive}
              keyBoardControl={true}
              transitionDuration={800}
              containerClass="carousel-icon-container"
              removeArrowOnDeviceType={['mobile']}
              itemClass="carousel-item-padding-40-px"
            >
              <div className='grocery' id='Grocery' onClick={categoryHandler}>
                <div className='icon' id='Grocery'>
                  <i className="ri-shopping-cart-line" id='Grocery'></i>
                </div>
                <p>Grocery</p>
              </div>
              <div className='shopping' id='Shopping' onClick={categoryHandler}>
                <div className='icon' id='Shopping'>
                  <i className="ri-shopping-bag-line" id='Shopping'></i>
                </div>
                <p>Shopping</p>
              </div>
              <div className='bill' id='Bill' onClick={categoryHandler}>
                <div className='icon' id='Bill'>
                  <i className="ri-lightbulb-flash-line" id='Bill'></i>
                </div>
                <p>Bill</p>
              </div>
              <div className='entertainment' id='Entertainment' onClick={categoryHandler}>
                <div className='icon' id='Entertainment'>
                  <i className="ri-game-line" id='Entertainment'></i>
                </div>
                <p>Entertainment</p>
              </div>
              <div className='holiday' id='Holiday' onClick={categoryHandler}>
                <div className='icon' id='Holiday'>
                  <i className="ri-plane-line" id='Holiday'></i>
                </div>
                <p>Holiday</p>
              </div>
              <div className='transport' id='Transport' onClick={categoryHandler}>
                <div className='icon' id='Transport'>
                  <i className="ri-car-line" id='Transport'></i>
                </div>
                <p>Transport</p>
              </div>
              <div className='foodDrink' id='Food & Drink' onClick={categoryHandler}>
                <div className='icon' id='Food & Drink'>
                  <i className="ri-restaurant-line" id='Food & Drink'></i>
                </div>
                <p>Food & Drink</p>
              </div>
              <div className='charity' id='Charity' onClick={categoryHandler}>
                <div className='icon' id='Charity'>
                  <i className="ri-service-line" id='Charity'></i>
                </div>
                <p>Charity</p>
              </div>
              <div className='person' id='Person' onClick={categoryHandler}>
                <div className='icon' id='Person'>
                  <i className="ri-user-line" id='Person'></i>
                </div>
                <p>Person</p>
              </div>
              <div className='personalCare' id='Personal Care' onClick={categoryHandler}>
                <div className='icon' id='Personal Care'>
                  <i className="ri-heart-line" id='Personal Care'></i>
                </div>
                <p>Personal Care</p>
              </div>
              <div className='miscellaneous' id='Miscellaneous' onClick={categoryHandler}>
                <div className='icon' id='Miscellaneous'>
                  <i className="ri-file-copy-line" id='Miscellaneous'></i>
                </div>
                <p>Miscellaneous</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
