package car.tracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST)
public class BadRequest extends RuntimeException{

	public BadRequest(String message, Throwable e) {
        super(message, e);
    }
}
