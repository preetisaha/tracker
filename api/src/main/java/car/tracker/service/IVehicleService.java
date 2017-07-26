package car.tracker.service;
import java.util.List;

import car.tracker.entity.Alert;
import car.tracker.entity.Vehicle;

public interface IVehicleService {

    public void saveOrUpdate(List<Vehicle> vehicle);
	public List<Vehicle> getVehicles();
	public List<Alert> getHistoricalAlerts(String vin);
}
