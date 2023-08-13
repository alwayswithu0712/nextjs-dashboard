import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div>
          {/* <a className=""  style={{color:"#ffffff"}} href="">CoreUI </a> */}
          <a className="" style={{color:"#ffffff"}} href="">
            Merov company
          </a>
          {' '}

        </div>
        {/* <div className="ms-md-auto" style={{color:"#ffffff"}}>
          Powered by&nbsp;
          <a
            className=""
            href="@layout/AdminLayout/AdminLayout"
            style={{color:"#ffffff"}}
          >
            CoreUI UI
            Components
          </a>
        </div> */}
      </Container>
    </footer>
  )
}
