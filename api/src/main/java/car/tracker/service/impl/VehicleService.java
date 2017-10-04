package car.tracker.service.impl;

import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import car.tracker.entity.Alert;
import car.tracker.entity.Vehicle;
import car.tracker.exception.ResourceNotFoundException;
import car.tracker.repositary.IVehicleDAO;
import car.tracker.service.IVehicleService;

@Service
public class VehicleService implements IVehicleService {

    @Autowired
    IVehicleDAO vehicleDAO;

    @Transactional
    public void saveOrUpdate(List<Vehicle> vehicles) {
        vehicles.forEach((vehicle) -> {
                vehicleDAO.saveOrUpdate(vehicle);
            }
        );
    }
    
    @Transactional(readOnly = true)
    public List<Vehicle> getVehicles(){
		return vehicleDAO.getVehicles();	
    }
    
    @Transactional
    public List<Alert> getHistoricalAlerts(String vin){
    	Vehicle vehicle = vehicleDAO.findOne(vin);
    	if (vehicle==null) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}
    	Hibernate.initialize(vehicle.getAlerts());
    	return vehicle.getAlerts();
    }
}
