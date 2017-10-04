package car.tracker.repositary;

import java.util.List;

import car.tracker.constants.Status;
import car.tracker.entity.Alert;

public interface IAlertDAO {

    public void saveData(Alert alert);
    public Alert findOne(String id);
    public List<Alert> getAlerts(Status status);
}
