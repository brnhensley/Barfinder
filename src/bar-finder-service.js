export class BarFinder
{
  findBar(city, state) {
    // => this shit
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          console.log("OK");
        } else {
          reject(Error(request.statusText));
          console.log("BOOOO");
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
