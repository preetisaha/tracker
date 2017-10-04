package car.tracker.service.impl;

import car.tracker.dto.LatLng;

import car.tracker.entity.Reading;
import car.tracker.entity.Vehicle;
import car.tracker.exception.ResourceNotFoundException;
import car.tracker.repositary.IReadingDAO;
import car.tracker.repositary.IVehicleDAO;
import car.tracker.repositary.impl.ReadingDAO;
import car.tracker.service.IReadingService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReadingService implements IReadingService {

	@Autowired
	IReadingDAO readingDAO;

	@Autowired
	IVehicleDAO vehicleDAO;

	@Transactional
	public void saveReading(Reading reading) {
		Vehicle vehicle = vehicleDAO.findOne(reading.getVin());
		if (vehicle != null) {
			readingDAO.saveReading(reading);
		} else {
			throw new ResourceNotFoundException(" Vin does not exists");
		}

	}

	@Override
	@Transactional
	public List<LatLng> getGeoLocation(String vin) {
		List<Reading> readingList = readingDAO.getGeoLocation(vin);
		if (readingList.isEmpty()) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}
		
		List<LatLng> latLngList = readingList.stream().map((reading) -> {
			return new LatLng(reading.getLatitude(), reading.getLongitude());
		}).collect(Collectors.toList());

		return latLngList;
	}

	@Override
	public List<Integer> getEngineHP(String vin, int minutes) {
		List<Reading> readingList = readingDAO.getReadingHistory(vin, minutes);
		if (readingList.isEmpty()) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}

		List<Integer> engineHPList = readingList.stream().map((reading) -> {
			return reading.getEngineHp();
		}).collect(Collectors.toList());

		return engineHPList;
	}

	@Override
	public List<Integer> getEnginRPM(String vin, int minutes) {
		List<Reading> readingList = readingDAO.getReadingHistory(vin, minutes);
		if (readingList.isEmpty()) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}
		
		List<Integer> engineRPMList = readingList.stream().map((reading) -> {
			return reading.getEngineRpm();
		}).collect(Collectors.toList());

		return engineRPMList;
	}

	@Override
	public List<Double> getfuelVolume(String vin, int minutes) {
		List<Reading> readingList = readingDAO.getReadingHistory(vin, minutes);
		if (readingList.isEmpty()) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}
		
		List<Double> fuelVolumeList = readingList.stream().map((reading) -> {
			return reading.getFuelVolume();
		}).collect(Collectors.toList());

		return fuelVolumeList;
	}

	@Override
	public List<Integer> getSpeed(String vin, int minutes) {
		List<Reading> readingList = readingDAO.getReadingHistory(vin, minutes);
		if (readingList.isEmpty()) {
			throw new ResourceNotFoundException("Invalid 'VIN' or no Readings available.");
		}
		
		List<Integer> speedList = readingList.stream().map((reading) -> {
			return reading.getSpeed();
		}).collect(Collectors.toList());

		return speedList;
	}

}
