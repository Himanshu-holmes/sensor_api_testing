
    const sensor = new AmbientLightSensor();
    sensor.addEventListener("reading", (event) => {
      console.log("Current light level:", sensor.illuminance);
    });
    sensor.addEventListener("error", (event) => {
      console.log(event.error.name, event.error.message);
    });
    sensor.start();

    sensor.onreading = () => {
        document.getElementById("light").innerHTML = sensor.illuminance;
        console.log(sensor.illuminance);
    }
 
    
  