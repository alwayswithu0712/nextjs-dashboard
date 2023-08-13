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
    <div className="row mt-5">
      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Current Hashrate</div>
              <div className="fs-4 fw-semibold">
                00 H
                <span className="fs-6 ms-2 fw-normal">
                  (-00%
                  <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart1"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Miner Rewards</div>
              <div className="fs-4 fw-semibold">
                --
                <span className="fs-6 ms-2 fw-normal">
                  (--
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Profile Efficiency</div>
              <div className="fs-4 fw-semibold">
                -- %
                <span className="fs-6 ms-2 fw-normal">
                  (-- %
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Active Accounts</div>
              <div className="fs-4 fw-semibold">
                --
                <span className="fs-6 ms-2 fw-normal">
                  (--
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Active Workers</div>
              <div className="fs-4 fw-semibold">
                --
                <span className="fs-6 ms-2 fw-normal">
                  (--
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart3"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card bg="secondary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div>Inactive Workers</div>
              <div className="fs-4 fw-semibold">
                --
                <span className="fs-6 ms-2 fw-normal">
                  (--%
                  <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                  )
                </span>
              </div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart4"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>
    </div>

    <div className="row justify-content-between">
      <div className="col-lg-6 col-md-12 ">
        <Card className="bg-secondary ">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0 text-white">Total Hashrate</h4>
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
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
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

      <div className="col-lg-6 col-md-12 ">
        <Card className="bg-secondary text-white">
          <Card.Body>
            <div className="d-flex justify-content-center">
              <div>
                <h4 className="mb-0">Network Difficulty</h4>
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
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
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
  </AdminLayout>
)

export default Home
