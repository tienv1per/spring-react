package com.theshy.fullstackbackend.inversionOfControl;

public class NotificationService {
    private MessageService messageService;

    public NotificationService(MessageService messageService) {
        this.messageService = messageService;
    }

    public void sendNotification() {
        String message = messageService.getMessage();
        System.out.println("Sending notification: " + message);
    }
}
