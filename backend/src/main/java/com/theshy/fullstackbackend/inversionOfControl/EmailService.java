package com.theshy.fullstackbackend.inversionOfControl;

public class EmailService implements MessageService {
    public String getMessage() {
        return "This is an email message";
    }
}
