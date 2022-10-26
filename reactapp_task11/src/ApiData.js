import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

 const ApiData = (props) => {
  
      const { postData } = props;
      console.log(props);
      const dataList = postData.length ? 
      (postData.slice(0,5).map((i => {
        return (
          <div key={i.id}>
          <p>ID: {i.id}</p>
          <p>UID: {i.uid}</p>
          <p>Account Number: {i.account_number}</p>
          <p>IBAN: {i.iban}</p>
          <p>Bank Name: {i.bank_name}</p>
          <p>Routing Number: {i.routing_number}</p>
          <p>Swift BIC: {i.swift_bic}</p>
          <br></br>
          </div>
        )
      }
      ))) : 
      (<p>
        <ClipLoader
          color={'blue'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
       </p>)

        return (
            <> 
            {dataList}
            </>
        )
}

export default ApiData;
