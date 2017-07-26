package car.tracker.dto;

public class AlertDTO {

	private String reason;
	private String status;
	private String vin;
	private String timeStamp;
	
	public AlertDTO (String reason, String status, String vin, String timeStamp) {
		this.reason = reason;
		this.status = status;
		this.vin = vin;
		this.timeStamp = timeStamp;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getVin() {
		return vin;
	}

	public void setVin(String vin) {
		this.vin = vin;
	}

	public String getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	
	
}
