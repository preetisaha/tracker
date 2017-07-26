package car.tracker.controller;

import car.tracker.entity.Reading;
import car.tracker.repositary.IVehicleDAO;
import car.tracker.service.IAlertService;
import car.tracker.service.IReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "readings")
@CrossOrigin
public class ReadingController {

    @Autowired
    IReadingService readingService;

    @Autowired
    IAlertService alertService;

    @Autowired
    IVehicleDAO vehicleDAO;

    @RequestMapping(method = RequestMethod.POST)
    public void saveOrUpdate(@RequestBody Reading reading){
        readingService.saveReading(reading);
        alertService.applyRules(reading, vehicleDAO);
    }
}
