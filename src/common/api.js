import axios from 'axios'

// const APIUrl = 'https://api.jasonfung.co.uk/budgettracker/?apiType=multi&accId=0014K00000BWiJyQAL&orderBy=ascending&limit=10'


// GET all expenditure request
// Use raw `https://expenditure-developer-edition.um6.force.com/` endpoint for now
// TODO: look into migrating these to `https://api.jasonfung.co.uk/budgettracker`
export const getAllExpenditure = (accID, transactionNum) => {
  const res = axios.get(`https://expenditure-developer-edition.um6.force.com/budgettracker/services/apexrest/budgettracker/?apiType=multi&accId=${accID}&orderBy=ascending&limit=${transactionNum}`)
  return res
}
