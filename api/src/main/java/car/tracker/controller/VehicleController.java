package car.tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import car.tracker.dto.LatLng;
import car.tracker.entity.Alert;
import car.tracker.entity.Reading;
import car.tracker.entity.Vehicle;
import car.tracker.service.IReadingService;
import car.tracker.service.IVehicleService;

@RestController
@RequestMapping(value = "vehicles")
@CrossOrigin
public class VehicleController {

	@Autowired
	IVehicleService vehicleService;

	@Autowired
	IReadingService readingService;

	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody List<Vehicle> vehicles) {
		vehicleService.saveOrUpdate(vehicles);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Vehicle> getVehicles() {
		return vehicleService.getVehicles();
	}

	@RequestMapping(method = RequestMethod.GET, value = "{vin}/alerts")
	public List<Alert> getHistoricalAlerts(@PathVariable String vin) {
		return vehicleService.getHistoricalAlerts(vin);
	}

	@RequestMapping(method = RequestMethod.GET, value = "{vin}/geolocation")
	public List<LatLng> getGeoLocation(@PathVariable String vin) {
		return readingService.getGeoLocation(vin);
	}

	@RequestMapping(method = RequestMethod.GET, value = "{vin}/reading/engineHP")
	public List<Integer> getEngineHP(@PathVariable String vin, @RequestParam int minutes) {
		return readingService.getEngineHP(vin, minutes);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "{vin}/reading/engineRPM")
	public List<Integer> getEnginRPM(@PathVariable String vin, @RequestParam int minutes) {
		return readingService.getEnginRPM(vin, minutes);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "{vin}/reading/fuelVolume")
	public List<Double> getfuelVolume(@PathVariable String vin, @RequestParam int minutes) {
		return readingService.getfuelVolume(vin, minutes);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "{vin}/reading/speed")
	public List<Integer> getSpeed(@PathVariable String vin, @RequestParam int minutes) {
		return readingService.getSpeed(vin, minutes);
	}
}
