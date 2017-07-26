package car.tracker.service;

import car.tracker.constants.Status;
import car.tracker.dto.AlertDTO;
import car.tracker.entity.Alert;
import car.tracker.entity.Reading;
import car.tracker.entity.Vehicle;
import car.tracker.exception.ResourceNotFoundException;
import car.tracker.repositary.IVehicleDAO;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

public interface IAlertService {

	@Transactional
	default void applyRules(Reading reading, IVehicleDAO vehicleDAO) {

		Vehicle vehicle = vehicleDAO.findOne(reading.getVin());
		if (vehicle == null) {
			throw new ResourceNotFoundException("vin does not exists");
		} else {

			checkEngineRpm(reading, vehicle);
			checkFuleVolume(reading, vehicle);
			checkTirePressure(reading, vehicle);
			checkEngineLightAndCoolant(reading, vehicle);
			vehicleDAO.saveOrUpdate(vehicle);
		}
	}

	public void checkEngineRpm(Reading reading, Vehicle vehicle);

	public void checkFuleVolume(Reading reading, Vehicle vehicle);

	public void checkTirePressure(Reading reading, Vehicle vehicle);

	public void checkEngineLightAndCoolant(Reading reading, Vehicle vehicle);
	
	public List<AlertDTO> getAlerts(Status status);
}
