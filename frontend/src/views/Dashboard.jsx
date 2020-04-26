/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  //dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
// datasetKeyProvider(){
//   return Math.random();
// }
const Dashboard = () => {

  const [loadedPlaces, setLoadedPlaces] = useState()
  const [timeStamp, setTimeStamp] = useState()
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // const response = await fetch(`http://localhost:5000/api/energy/p1`)
        // const responseData = await response.json();
        // console.log(responseData.energy[0].value)
        // setLoadedPlaces(responseData.energy);
        // for (let i in responseData.energy) {
        //   console.log(i)
        //   console.log(responseData.energy[i].value)
        //   setLoadedPlaces(responseData.energy[i].value);
        // }
        let myheaders = {
          "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODc2MzYzNTIsInB1YmxpY19pZCI6IjU1ZDRjOWJkLTVjN2ItNGZmOC04ZTZiLTU0ZTM3MGEwYjEyMCJ9.Tca1VV74pS8Z2DJLpsmmtTzwRO2U1DLKcC__c3F1XtA"
        }
        await fetch(`http://localhost:5000/api/energy/p1`)
          .then(response => response.json())
          .then(energy => {
            var arr = []
            var arr1 = []
            energy.energy.forEach(element => {
              console.log(element.value)
              arr.push(element.value)
              arr1.push(element.timeStamp)
            })
            console.log(arr, arr1)
            arr.push(400)
            setLoadedPlaces(arr)
            setTimeStamp(arr1)
          })
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPlaces()
  }, [])
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Energy Consumed</p>
                      <CardTitle tag="p">1500</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Energy Saved</p>
                      <CardTitle tag="p">1345</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last day
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Hours used</p>
                      <CardTitle tag="p">20</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> In the last hour
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-time-alarm text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Last Hour</p>
                      <CardTitle tag="p">65</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Energy Consumed</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>

                <Line
                  key={Math.random()}
                  values={25}
                  data={canvas => {
                    return {
                      labels: timeStamp,

                      datasets: [
                        {
                          borderColor: "#4acccd",
                          backgroundColor: "#4acccd",
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          borderWidth: 3,
                          data: loadedPlaces,
                          key: 1
                        },
                        {
                          borderColor: "#f17e5d",
                          backgroundColor: "#f17e5d",
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          borderWidth: 3,
                          data: [200, 150, 320, 340, 365],
                          //360, 370, 385, 390, 384, 408, 420],
                          key: 2
                        },
                        {
                          borderColor: "#fcc468",
                          backgroundColor: "#fcc468",
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          borderWidth: 3,
                          data: [270, 394, 415, 409, 425, 445, 460, 450, 478, 484]
                        }
                      ]
                    };
                  }}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Energy Comparison</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={canvas => {
                    return {
                      labels: [1, 2, 3],
                      datasets: [
                        {
                          label: "Emails",
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          backgroundColor: ["#4acccd", "#fcc468", "#ef8157"],
                          borderWidth: 0,
                          data: [342, 480, 530]
                        }
                      ]
                    };
                  }}

                  options={{
                    legend: {
                      display: false
                    },

                    pieceLabel: {
                      render: "percentage",
                      fontColor: ["white"],
                      precision: 2
                    },

                    tooltips: {
                      enabled: false
                    },

                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            display: false
                          },
                          gridLines: {
                            drawBorder: false,
                            zeroLineColor: "transparent",
                            color: "rgba(255,255,255,0.05)"
                          }
                        }
                      ],

                      xAxes: [
                        {
                          barPercentage: 1.6,
                          gridLines: {
                            drawBorder: false,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                          },
                          ticks: {
                            display: false
                          }
                        }
                      ]
                    }
                  }}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Water Treatment {" "}
                  <i className="fa fa-circle text-warning" /> Water Pumping{" "}
                  <i className="fa fa-circle text-danger" /> Water Recycling{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Daily Consumption</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  key={Math.random()}
                  data={{
                    labels: [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun",
                    ],
                    datasets: [
                      {
                        data: [0, 19, 15, 20, 30, 40, 40],
                        fill: false,
                        borderColor: "#fbc658",
                        backgroundColor: "transparent",
                        pointBorderColor: "#fbc658",
                        pointRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 8
                      },
                      {
                        data: [0, 5, 10, 12, 20, 27, 30, 34],
                        fill: false,
                        borderColor: "#51CACF",
                        backgroundColor: "transparent",
                        pointBorderColor: "#51CACF",
                        pointRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 8
                      }
                    ]
                  }

                  }
                  options={{
                    legend: {
                      display: false,
                      position: "top"
                    }
                  }}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Water Pumping{" "}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );

}
const dashboard24HoursPerformanceChart = {

  data: canvas => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ],

      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [2]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
}



export default Dashboard;
