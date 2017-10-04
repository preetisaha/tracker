package car.tracker.repositary;
import car.tracker.entity.Vehicle;
import java.util.List;

public interface IVehicleDAO {

    public void saveOrUpdate(Vehicle vehicle);
    public Vehicle findOne(String vin);
	public List<Vehicle> getVehicles();
}
