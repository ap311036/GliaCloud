import React, { Component } from 'react'

export default class Ajax extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SiteName: null,
      Pollutant: null,
      Status: null,
      PM25: null
    };
    this.timer = setInterval(() => {
      this.getDataFromServer().then((res) => {
        console.log('res', res);
        this.setState({
          SiteName: res.SiteName,
          Pollutant: res.Pollutant,
          Status: res.Status,
          PM25: res.PM25,
        })
      })
    }, 10000);
  };
  
  componentWillMount () {
    this.getDataFromServer().then((res) => {
      console.log('res', res);
      this.setState({
        SiteName: res.SiteName,
        Pollutant: res.Pollutant,
        Status: res.Status,
        PM25: res.PM25,
      })
    })
  }

  getDataFromServer = () => {
    let res = new Promise(function (resolve, reject) {
      fetch('http://opendata2.epa.gov.tw/AQI.json').then((j) => { return j.json() })
        .then((result) => {
          let SiteName = result.map((item) => { return item.SiteName })
          let Pollutant = result.map((item) => { return item.Pollutant })
          let Status = result.map((item) => { return item.Status })
          let PM25 = result.map((item) => { return item['PM2.5_AVG'] })
          resolve({ SiteName, Pollutant, Status, PM25 })
        })

    })
    return res;
  }

  render() {
    const {
      SiteName,
      Pollutant,
      Status,
      PM25
    } = this.state;
    return (
      <div style={{'display': 'flex'}}>
        SiteName:
        <div>
          {
            SiteName && SiteName.map((site, i)=>{
              return <div style={style.item} key={i}>{site}</div>
            })
          }
        </div>
        Pollutant:
        <div>
          {
            Pollutant && Pollutant.map((Poll, i) => {
              return <div style={style.item} key={i}>{Poll === '' ? '此處留白' : Poll}</div>
            })
          }
        </div>
        Status:
        <div>
          {
            Status && Status.map((S, i) => {
              return <div style={style.item} key={i}>{S}</div>
            })
          }
        </div>
        PM2.5:
        <div>
          {
            PM25 && PM25.map((PM, i) => {
              return <div style={style.item} key={i}>{PM === '' ? '此處留白' : PM}</div>
            })
          }
        </div>
      </div>
    )
  }
}

const style = {
  item: {
    'fontSize': '20px',
    'lineHeight': '20px'
  }
}