import React from 'react'
import { Button } from 'react-bootstrap'

import {
  PieChart, Pie, Cell
} from 'recharts'

const Summary = () => {

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

  const janData = [
    {
      name: 'Spent', value: 400
    },
    {
      name: 'Saved', value: 600
    }
  ]

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

  return (
    <div className='wrapper summary-wrapper'>
      <div className='button-wrapper'>
        <Button variant='nav-theme'>Add Payment</Button>
      </div>
      <div className='graph-wrapper'>
        <PieChart width={1200} height={500}>
          <Pie
            data={janData}
            cx='50%'
            cy='50%'
            innerRadius={150}
            outerRadius={170}
            paddingAngle={5}
            dataKey="value"
          >
            {janData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default Summary


