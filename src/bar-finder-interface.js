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
      console.log(body[0].name);
      $('#showBarName').html(`${body[0].name}<br>`)
      $('#showBarAddress').html(`${body[0].street}<br>${body[0].city}, ${body[0].state} ${body[0].postal_code}<br>`)
      $('#showBarPhone').html(`${body[0].phone}<br>`)
      $('#showBarWebsite').html(`${body[0].website_url}<br>`)
    }, function(error) {
      $('#showError').text(`Everything is fucked! ${error.message}`);
    })
  })
});
