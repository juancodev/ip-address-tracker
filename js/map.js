const inputIP = document.getElementById('inputIP');
const btnSearchIP = document.getElementById('btnSearchIP');

//Output message

const ip = document.getElementById('ip');
const locationRegion = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

const searchIP = (event) => {
  // console.log(event);
  event.preventDefault();

  // const IP = parseInt(inputIP.value);

  const goToSearch = async (url) => {
    const searchData = await fetch(url);
    const dataIP = await searchData.json();
    return dataIP;
  };

  goToSearch("https://geo.ipify.org/api/v2/country,city?apiKey=at_7YNnrt5gTvVQniS4ncpyp4h3tO9zb&ipAddress=8.8.8.8")
    .then((data) => {
      console.log(data);
      ip.textContent = "ip: " + data.ip;
      locationRegion.textContent = "Region:" + data.location.region;
      timezone.textContent = "timezone: " + data.location.timezone;
      isp.textContent = "isp: " + data.isp;
    })
    .catch((e) => {
      console.error("hubo un error!")
      console.log(e);
    });
}
btnSearchIP.addEventListener('click', searchIP);