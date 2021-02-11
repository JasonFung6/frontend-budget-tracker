import axios from 'axios'

// const APIUrl = 'http://api.jasonfung.co.uk/budgettracker/?apiType=multi&accId=0014K00000BWiJyQAL&orderBy=ascending&limit=10'

//GET all expenditure request
export const getAllExpenditure = (accID, transactionNum) => {
  const res = axios.get(`http://api.jasonfung.co.uk/budgettracker/?apiType=multi&accId=${accID}&orderBy=ascending&limit=${transactionNum}`)
  return res
}
