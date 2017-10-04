package car.tracker.repositary.impl;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;


import car.tracker.entity.Reading;

import car.tracker.repositary.IReadingDAO;

@Repository
public class ReadingDAO implements IReadingDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void saveReading(Reading reading) {
        entityManager.persist(reading);
    }
    
    @Override
	public List<Reading> getGeoLocation(String vin) {
    	TypedQuery<Reading> query = entityManager.createNamedQuery("Reading.getReadingHistory", Reading.class);
    	query.setParameter("timestamp", new Timestamp(System.currentTimeMillis() - (30 * 60 * 1000)) );
    	query.setParameter("vin", vin);
		return query.getResultList();
	}

	@Override
	public List<Reading> getReadingHistory(String vin, int minutes) {
		TypedQuery<Reading> query = entityManager.createNamedQuery("Reading.getReadingHistory", Reading.class);
    	query.setParameter("timestamp", new Timestamp(System.currentTimeMillis() - (minutes * 60 * 1000)) );
    	query.setParameter("vin", vin);
		return query.getResultList();
	}
	
}
