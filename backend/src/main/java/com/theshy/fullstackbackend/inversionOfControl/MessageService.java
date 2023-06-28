package com.theshy.fullstackbackend.inversionOfControl;

public interface MessageService {
    String getMessage();

    class Main {
        public static void main(String[] args) {
            MessageService emailService = new EmailService();
            NotificationService notificationService = new NotificationService(emailService);
            notificationService.sendNotification();
        }
    }
}
