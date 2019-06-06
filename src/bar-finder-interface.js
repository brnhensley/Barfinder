import { BarFinder } from './bar-finder-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#barSearch').submit(function(event) {
    event.preventDefault();
    let city = $('#city').val();
    let state = $('#state').val();
    $('#city').val("");
    $('#state').val("");
    console.log("city" + city + " " + "state" + state);
    let barFinder = new BarFinder;
    let promise = barFinder.findBar(city, state);
    promise.then(function(response) {
      let body = JSON.parse(response);
      body.forEach(function(bar) {
        $('#showBars').append(`<strong>${bar.name}</strong><br> ${bar.street}, ${bar.city}, ${bar.state}, ${bar.postal_code}<br> ${bar.phone}<br> ${bar.website_url}<hr>`)
      }, function(error) {
        $('#showError').text(`There was an error processing your request: ${error.message}`);
      })
    })
  })
});
