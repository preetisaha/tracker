package car.tracker.service;

import java.util.List;

import car.tracker.dto.LatLng;

import car.tracker.entity.Reading;

public interface IReadingService {
    public void saveReading(Reading reading);
    public List<LatLng> getGeoLocation(String vin);
    //public List<Double> getVehicleHistory(String vin);
    public List<Integer> getEngineHP(String vin, int minutes);
    public List<Integer> getEnginRPM(String vin, int minutes);
    public List<Double> getfuelVolume(String vin, int minutes);
    public List<Integer> getSpeed(String vin, int minutes);
}
