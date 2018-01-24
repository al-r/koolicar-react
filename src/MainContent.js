import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './css/MainContent.css';
import datepickerIcon from './img/datepicker-icon.jpg';
    
function Reduction(props) {
  if(props.reduction!=null) {
    return <span className="montant"><h3 className="text-green">Réduction : </h3>{props.reduction}</span>;
  } else {
    return '';
  }
}
    
function Total(props) {
  if(props.total!=null) {
    return <span className="montant"><h3 className="text-pink">Total : </h3>{props.total}</span>;
  } else {
    return '';
  }
}

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [{
        vehicle: 'Renault Trafic',
        start: '22 Sept. 10h45',
        end: '23 Sept. 12h45',
        distance: '145km',
        length: '15h45',
        status: 'Terminée',
        amount: '123,45€',
        reduction: '20€',
        total: '103,45€',
        receipt: 'https://downloads.bbc.co.uk/aboutthebbc/insidethebbc/reports/pdf/bbc_distinctiveness_april2016.pdf'
      },
      {
        vehicle: 'Renault Mégane',
        start: '12 Juil. 23h45',
        end: '13 Sept. 11h05',
        distance: '200km',
        length: '6h05',
        status: 'Terminée',
        amount: '45,78€',
        reduction: null,
        total: null,
        receipt: 'http://downloads.bbc.co.uk/schools/500words/500words_online.pdf'
      },
      {
        vehicle: 'Mini Cooper',
        start: '06 Juil. 7h30',
        end: '06 Juil. 23h00',
        distance: '145km',
        length: '6h10',
        status: 'Terminée',
        amount: '45,56€',
        reduction: null,
        total: null,
        receipt: 'http://downloads.bbc.co.uk/schools/500words/500words_online.pdf'
      }]
    };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(startDate) {
    this.setState({
      startDate: startDate
    });
  }

  handleChangeEnd(endDate) {
    this.setState({
      endDate: endDate
    });
  }


  render() {
    return (
      <div id="main-content">
            <div className="container">
                <h1>Locations</h1>

                <div id="sub-heading">
                    <div id="total" className="sub-heading-item">
                        <h2>{this.state.locations[0].amount}</h2>
                        <a href="#" target="_blank">Retirer mon argent</a>
                    </div>
                    <form id="filters" className="sub-heading-item">
                        <div className="datepicker">
                            <img src={datepickerIcon} width="15" height="15" alt="Datepicker for start date" />
                            <DatePicker id="start-date" placeholderText="dd/mm" minDate={moment()} dateFormat="DD/MM" selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
                        </div>
                        <div className="datepicker">
                            <img src={datepickerIcon} width="15" height="15" alt="Datepicker for end date" />
                            <DatePicker id="end-date" placeholderText="dd/mm" minDate={this.state.startDate} dateFormat="DD/MM" selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
                        </div>
                        <button type="submit" className="button-filter">Filtrer</button>
                    </form>
                </div>

                <ul id="list" className="list" role="list">
                    <li className="list-item list-item-heading">
                        <div className="list-item-col">
                            <h3>Véhicule</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Début</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Fin</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Distance</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Durée</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Statut</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Montant</h3>
                        </div>
                        <div className="list-item-col">
                            <h3>Reçu</h3>
                        </div>
                    </li>

                    {this.state.locations.map(item => (
                      <li className="list-item">
                          <h3 className="list-item-col">
                              {item.vehicle}
                          </h3>
                          <div className="list-item-col">
                              <h3>Début : </h3>
                              {item.start}
                          </div>
                          <div className="list-item-col">
                              <h3>Fin : </h3>
                              {item.end}
                          </div>
                          <div className="list-item-col">
                              {item.distance}
                          </div>
                          <div className="list-item-col">
                              <h3>Durée : </h3>
                              {item.length}
                          </div>
                          <div className="list-item-col">
                              <h3>Statut : </h3>
                              {item.status}
                              <span className="nomob text-green" style={{display: item.reduction==null ? 'none' : 'block'}}>Réduction</span>
                              <span className="nomob text-pink" style={{display: item.total==null ? 'none' : 'block'}}>Total</span>
                          </div>
                          <div className="list-item-col">
                              <span className="montant"><h3>Montant : </h3>{item.amount}</span>
                              <Reduction reduction={item.reduction} />
                              <Total total={item.total} />
                          </div>
                          <div className="list-item-col">
                              <a href="{item.receipt}" download>Télécharger<span className="mob"> un reçu</span></a>
                          </div>
                      </li>
                    ))}

                </ul>
            </div>
        </div>
    );
  }
}

export default MainContent;
