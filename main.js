let city = "Moscow";
const IpAdress = "67.159.8.141";
axios
  .get(`https://ipapi.co/${IpAdress}/json/`)
  .then((res) => {
    console.log(res.data);
    city = res.data.city;
    return city; // Возвращаем значение города из первого запроса
  })
  .then((city) => {
    let apiKey = "00a77d9f16c95f76498ad51a3c80111f";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

    return axios.get(url); // Возвращаем результат второго запроса
  })
  .then((res) => {
    document.querySelector(".city").innerHTML = res.data.name;
    document.querySelector(".temp").innerHTML = res.data.main.temp;
    document.querySelector(".humidity").innerHTML = res.data.main.humidity;
    document.querySelector(".wind").innerHTML = res.data.wind.speed;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
