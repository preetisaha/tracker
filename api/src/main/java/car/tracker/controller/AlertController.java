package car.tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import car.tracker.constants.Status;
import car.tracker.dto.AlertDTO;
import car.tracker.entity.Alert;
import car.tracker.exception.BadRequest;
import car.tracker.service.IAlertService;

@RestController
@RequestMapping(value = "alerts")
@CrossOrigin
public class AlertController {
	
	@Autowired
    IAlertService alertService;
	
	@RequestMapping(value = "status/{statusStr}", method = RequestMethod.GET)
	public List<AlertDTO> getAlerts(@PathVariable String statusStr){
		try {
			Status status = Status.valueOf(statusStr.toUpperCase());
			return alertService.getAlerts(status);
		} catch (IllegalArgumentException e) {
			throw new BadRequest(e.getMessage(), e);
		}
    }
}
