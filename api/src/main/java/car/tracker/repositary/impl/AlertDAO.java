package car.tracker.repositary.impl;

import car.tracker.constants.Status;
import car.tracker.entity.Alert;
import car.tracker.entity.Vehicle;
import car.tracker.repositary.IAlertDAO;
import org.springframework.stereotype.Repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Repository
public class AlertDAO implements IAlertDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void saveData(Alert alert) {
        entityManager.merge(alert);
    }

    @Override
    public Alert findOne(String id){
        return entityManager.find(Alert.class, id);
    }
    
    @Override
    public List<Alert> getAlerts(Status status){
    	TypedQuery<Alert> query = entityManager.createNamedQuery("Alert.findHighAlerts", Alert.class);
    	query.setParameter("status", status);
		return query.getResultList();
    }
}


