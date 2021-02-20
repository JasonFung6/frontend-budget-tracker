import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import {
  PieChart, Pie, Cell
} from 'recharts'

const Summary = () => {

  //* Add state for 'activeMonth', starting month = current month, set pie chart data as a 'controlled value' linking to state + update state and pie chart data as chevron btns are clicked

  const currentDate = new Date()


  const [activeMonth, setActiveMonth] = React.useState(currentDate.toLocaleString('en-GB', { month: 'short' }))
  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active) {
  //     return (
  //       <div className="custom-tooltip">
  //         <h2 className='label-heading'>{label}</h2>
  //         <p className="label-spent">{`${payload[0].name} : ${payload[0].value}`}</p>
  //         <p className="label-saved">{`${payload[1].name} : ${payload[1].value}`}</p>
  //       </div>
  //     )
  //   }
  //   return null
  // }
  //* Assume that index 0 = January, 12 = December etc
  //* Call 'GET all expenditure' endpoint and then logic on FE to check the date, if month is 1 => add price to 'Spent' for January
  //* Store empty 'monthData' array in state that will be updated as each transaction is used to update state i.e. const monthData = [[{name:'Spent', value: 0}, {name:'Saved', value:0}],[{name:'Spent', value: 0}, {name:'Saved', value:0}]]
  const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  const monthData = [
    [
      {
        name: 'Spent', value: 400
      },
      {
        name: 'Saved', value: 600
      }
    ],
    [
      {
        name: 'Spent', value: 300
      },
      {
        name: 'Saved', value: 1700
      }
    ],
    [
      {
        name: 'Spent', value: 200
      },
      {
        name: 'Saved', value: 800
      }
    ],
    [
      {
        name: 'Spent', value: 278
      },
      {
        name: 'Saved', value: 722
      }
    ],
    [
      {
        name: 'Spent', value: 189
      },
      {
        name: 'Saved', value: 811
      }
    ],
    [
      {
        name: 'Spent', value: 239
      },
      {
        name: 'Saved', value: 761
      }
    ],
    [
      {
        name: 'Spent', value: 349
      },
      {
        name: 'Saved', value: 651
      }
    ],
    [
      {
        name: 'Spent', value: 200
      },
      {
        name: 'Saved', value: 800
      }
    ],
    [
      {
        name: 'Spent', value: 278
      },
      {
        name: 'Saved', value: 722
      }
    ],
    [
      {
        name: 'Spent', value: 189
      },
      {
        name: 'Saved', value: 811
      }
    ],
    [
      {
        name: 'Spent', value: 239
      },
      {
        name: 'Saved', value: 761
      }
    ],
    [
      {
        name: 'Spent', value: 349
      },
      {
        name: 'Saved', value: 651
      }
    ]
  ]

  // const janData = [
  //   {
  //     name: 'Spent', value: 400
  //   },
  //   {
  //     name: 'Saved', value: 600
  //   }
  // ]

  const COLORS = ['#00ACBD', '#EBAC7F']

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 1
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 5,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // }

  // const transactions = [{
  //   name: 'Netflix',
  //   price: 20,
  //   date: '12/04/2020',
  //   category: 'Entertainment'
  // }, {
  //   name: 'Amazon',
  //   price: 120,
  //   date: '12/04/2020',
  //   category: 'Miscellaneous'
  // }, {
  //   name: 'Samsung',
  //   price: 230,
  //   date: '11/04/2020',
  //   category: 'Bill'
  // }, {
  //   name: 'McDonalds',
  //   price: 15.99,
  //   date: '09/04/2020',
  //   category: 'Food & Drink'
  // }, {
  //   name: 'Tesco',
  //   price: 175.85,
  //   date: '08/04/2020',
  //   category: 'Grocery'
  // }, {
  //   name: 'Travel expenses',
  //   price: 400,
  //   date: '07/04/2020',
  //   category: 'Holiday'
  // }, {
  //   name: 'Asos',
  //   price: 130,
  //   date: '01/04/2020',
  //   category: 'Shopping'
  // }, {
  //   name: 'Asda',
  //   price: 23,
  //   date: '19/03/2020',
  //   category: 'Grocery'
  // }, {
  //   name: 'Uniqlo',
  //   price: 90.50,
  //   date: '18/03/2020',
  //   category: 'Shopping'
  // }, {
  //   name: 'Thames Water',
  //   price: 90,
  //   date: '10/03/2020',
  //   category: 'Bill'
  // }, {
  //   name: 'Louis Vuitton',
  //   price: 1300,
  //   date: '28/02/2020',
  //   category: 'Shopping'
  // }, {
  //   name: 'Dyson',
  //   price: 200,
  //   date: '27/02/2020',
  //   category: 'Shopping'
  // }, {
  //   name: 'Chanel',
  //   price: 2650,
  //   date: '27/02/2020',
  //   category: 'Shopping'
  // }, {
  //   name: 'Taxi',
  //   price: 12.50,
  //   date: '27/02/2020',
  //   category: 'Transport'
  // }, {
  //   name: 'Jason',
  //   price: 36,
  //   date: '20/02/2020',
  //   category: 'Person'
  // }, {
  //   name: 'Dentist',
  //   price: 250,
  //   date: '19/02/2020',
  //   category: 'Personal Care'
  // }, {
  //   name: 'Vitamins',
  //   price: 12,
  //   date: '18/02/2020',
  //   category: 'Personal Care'
  // }, {
  //   name: 'Unicef',
  //   price: 20,
  //   date: '17/02/2020',
  //   category: 'Charity'
  // }]

  // const balance = 568.80

  const handleLeftBtn = () => {
    //* Use 'findIndex()' to match the 'activeMonth' from state in 'monthsOfTheYear' array and output the index, then reduce the index no. and update the state of the 'activeMonth'
    console.log('The current active month is:', activeMonth)
    const index = monthsOfTheYear.findIndex((month) => {
      return month === activeMonth
    })
    console.log('The index number for the active month is:', index)
  }

  // const handleRightBtn = () => {

  // }

  return (
    <div className='wrapper summary-wrapper'>
      <div className='button-wrapper'>
        <Button variant='nav-theme'>Add Payment</Button>
      </div>
      <h2>Jan</h2>
      <h3>2021</h3>
      <div className='graph-wrapper'>
        {//* Chevron arrows from font awesome, conditional rendering depending on
        }
        <FontAwesomeIcon icon={faChevronLeft} onClick={handleLeftBtn}/>
        <PieChart width={600} height={480}>
          <Pie
            data={monthData[9]}
            cx='50%'
            cy='50%'
            innerRadius={150}
            outerRadius={220}
            paddingAngle={3}
            dataKey="value"
          >
            {monthData[9].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <FontAwesomeIcon icon={faChevronRight}/>
      </div>
    </div>
  )
}

export default Summary


