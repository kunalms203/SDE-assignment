import React from 'react'
import './Content.css'
import Supplier from './Supplier.jsx'

const Content = () => {
  return (
    <div className='content'>
      <div className="sidebar p-4">
        <h2 className='mt-4 mb-4'>Add New Supplier</h2>
        <form action="">
          <label className= "form-label mt-2" htmlFor="audit">Name</label>
          <input className="form-control" type="text" placeholder="Supplier Name" name='name' id='name' />
          <label className= "form-label mt-2" htmlFor="audit">Country</label>
          <input className="form-control" type="text" placeholder="Country" name='country' id='country' />
          <label className= "form-label mt-2" htmlFor="audit">Contract Term</label>
          <input className="form-control" type="text" placeholder="Contract Term" name='contractTerm' id='contract' />
          <label className= "form-label mt-2" htmlFor="audit">Compilance Score</label>
          <input className="form-control" type="text" placeholder="Compliance Score" name='complianceScore' id='score' />
          <label className= "form-label mt-2" htmlFor="audit">Last Audit</label>
          <input className="form-control" type="date" placeholder="Last Audit" name='lastAudit' id='audit' />
          <button className='btn btn-outline-success mt-4' type="submit">Submit </button>
        </form>
      </div>
      <div className="supplierlist">
        <div className="suppliers">
            <div >Name</div>
            <div >Country</div>
            <div >Contract Term</div>
            <div >Compilance Score</div>
            <div >Last Audit</div>
            <div >Details</div>
        </div>
        <Supplier />
      </div>
    </div>
  )
}

export default Content
