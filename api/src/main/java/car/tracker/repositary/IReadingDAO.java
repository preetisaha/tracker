package car.tracker.repositary;

import java.util.List;

import car.tracker.dto.LatLng;
import car.tracker.entity.Reading;

public interface IReadingDAO {
	public void saveReading(Reading reading);

	public List<Reading> getGeoLocation(String vin);

	public List<Reading> getReadingHistory(String vin, int minutes);
}
