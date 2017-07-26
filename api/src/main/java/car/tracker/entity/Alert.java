package car.tracker.entity;

import car.tracker.constants.Status;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@NamedQueries({
    @NamedQuery(name = "Alert.findHighAlerts",
                query = "SELECT alert FROM Alert alert WHERE alert.status=:status")
})

public class Alert {

    @Id
    private String id;
    private String reason;

    @Enumerated(EnumType.STRING)
    private Status status;
    private Timestamp timestamp;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Vehicle vehicle;

    public Alert(String reason, Status status, Timestamp timestamp){
        this.id = UUID.randomUUID().toString();
        this.reason = reason;
        this.status = status;
        this.timestamp = timestamp;
    }

    public Alert () {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
