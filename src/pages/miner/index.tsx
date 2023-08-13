import type { NextPage } from 'next'
import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import React, { useState, useEffect } from 'react'


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)





const Home: NextPage = () => (
  <AdminLayout>
    <div className="row mt-5 mb-5">
      <div className="col-sm-12 col-lg-4 ">
        <Card bg="secondary" text="white" className="mb-4" style={{ height: "100%" }}>
          <Card.Body className="pb-0  align-items-start">
            <div className="fs-4 fw-semibold mt-3 mb-1">
              Mining Info
            </div>
            <div >
              <div className="fs-4 fw-semibold">
                00 H
                <div className="fs-6 ms-2 fw-normal">
                  (Hashrate)
                </div>
              </div>

              <hr></hr>

              <div className="fs-4 fw-semibold">
                00.00 %
                <div className="fs-6 ms-2 fw-normal">
                  (share efficiency)
                </div>
              </div>
              <hr></hr>

              <div className="fs-4 fw-semibold">
                0.000000000000 BTC
                <div className="fs-6 ms-2 fw-normal mb-3">
                  (Mined Revenue)
                </div>
              </div>
            </div>

          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-12 col-lg-8">
        <Card className=" bg-secondary content">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0 text-white">Hashrate (TH)</h4>
              </div>
            </div>
            <div
              style={{
                height: '300px',
                marginTop: '40px',
              }}
            >
              <Line
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10'],
                  datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(13, 202, 240, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,

                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                    fill: true,
                  },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                        color: 'white',
                      },
                      ticks: {
                        color: 'white'
                      }
                    },
                    y: {
                      beginAtZero: true,
                      max: 250,
                      ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        color: 'rgb(255,255,255)',
                      },
                      grid: {
                        drawOnChartArea: true,
                        color: 'white'
                      }
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>

    <div className="row justify-content-between">
      <div className="col-lg-6 col-md-12 p-2">
        <Card className="card bg-secondary">
          <Card.Body className="card-body ">
            <h5 className="card-title">Miner</h5>
            {/* <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">1H Hashrate</th>
                  <th scope="col">1H Efficiency</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">miner_0001</th>
                  <td>64.5</td>
                  <td>100</td>
                  <td>00</td>
                </tr>
                <tr>
                  <th scope="row">miner_0002</th>
                  <td>46.9</td>
                  <td>100</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">miner_0003</th>
                  <td>49.9</td>
                  <td>100</td>
                  <td>21</td>
                </tr>
                <tr>
                  <th scope="row">miner_0004</th>
                  <td>67.9</td>
                  <td>98</td>
                  <td>35</td>
                </tr>
                
              </tbody>
            </table> */}
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-6 col-md-12 p-2">
        <Card className="bg-secondary text-white">
          <Card.Body>
            <div className="d-flex justify-content-center">
              <div>
                <h4 className="mb-0">Hashrate</h4>
              </div>
            </div>
            <div
              style={{
                height: '300px',
                marginTop: '40px',
              }}
            >
              <Line
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderColor: 'rgba(13, 202, 240, 1)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                      ],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                        color: 'white'
                      },
                      ticks: {
                        color: 'white'
                      }
                    },
                    y: {
                      beginAtZero: true,
                      max: 250,
                      grid: {
                        color: 'white'
                      },
                      ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        color: 'white'
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  
  </AdminLayout>
)

export default Home
