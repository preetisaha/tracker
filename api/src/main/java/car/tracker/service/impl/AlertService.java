package car.tracker.service.impl;

import car.tracker.constants.Status;
import car.tracker.dto.AlertDTO;
import car.tracker.entity.Alert;
import car.tracker.entity.Reading;
import car.tracker.entity.Tires;
import car.tracker.entity.Vehicle;
import car.tracker.repositary.IAlertDAO;
import car.tracker.repositary.IVehicleDAO;
import car.tracker.service.IAlertService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AlertService implements IAlertService{

    @Autowired
    IVehicleDAO vehicleDAO;

    @Autowired
    IAlertDAO alertDAO;

    @Override
    public void checkEngineRpm(Reading reading, Vehicle vehicle) {
        if (reading.getEngineRpm() > vehicle.getRedlineRpm()){
            Alert alert = new Alert("Engine Rpm is high", Status.HIGH, reading.getTimestamp());
            vehicle.getAlerts().add(alert);
            alert.setVehicle(vehicle);
        }
    }

    @Override
    public void checkFuleVolume(Reading reading, Vehicle vehicle) {
        if(reading.getFuelVolume() < 10 % vehicle.getMaxFuelVolume()){
            Alert alert = new Alert("Fuel volume is less", Status.MEDIUM, reading.getTimestamp());
            vehicle.getAlerts().add(alert);
            alert.setVehicle(vehicle);
        }
    }

    @Override
    public void checkTirePressure(Reading reading, Vehicle vehicle) {
        Tires tires = reading.getTires();
        if(tires.getFrontLeft() < 32 || tires.getFrontLeft() > 36 || tires.getFrontRight() < 32 || tires.getFrontRight() > 36 || tires.getRearLeft() < 32 || tires.getRearLeft() > 36 || tires.getRearRight() < 32 || tires.getRearRight() > 36){
            Alert alert = new Alert("Tire Pressure is either high or low", Status.LOW, reading.getTimestamp());
            vehicle.getAlerts().add(alert);
            alert.setVehicle(vehicle);
        }
    }

    @Override
    public void checkEngineLightAndCoolant(Reading reading, Vehicle vehicle) {
        if (reading.isEngineCoolantLow() || reading.isCheckEngineLightOn()){
            Alert alert = new Alert("Engine Light is on or Engine coolant is low", Status.LOW, reading.getTimestamp());
            vehicle.getAlerts().add(alert);
            alert.setVehicle(vehicle);
        }
    }
    
    @Override
    public List<AlertDTO> getAlerts(Status status){
    	return alertDAO.getAlerts(status).stream().map((alert) -> {
    		return new AlertDTO(alert.getReason(), alert.getStatus().toString(), 
    				alert.getVehicle().getVin(), alert.getTimestamp().toString());
    	}).collect(Collectors.toList());
    }
}
