package car.tracker.repositary.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import car.tracker.dto.LatLng;
import car.tracker.entity.Vehicle;
import car.tracker.repositary.IVehicleDAO;

@Repository
public class VehicleDAO implements IVehicleDAO {

	@PersistenceContext
	EntityManager entityManager;

	public void saveOrUpdate(Vehicle vehicle) {
		entityManager.merge(vehicle);
	}

	public Vehicle findOne(String vin) {
		return entityManager.find(Vehicle.class, vin);
	}

	public List<Vehicle> getVehicles() {
		TypedQuery<Vehicle> query = entityManager.createNamedQuery("Vehicle.findAll", Vehicle.class);
		return query.getResultList();
	}
}
