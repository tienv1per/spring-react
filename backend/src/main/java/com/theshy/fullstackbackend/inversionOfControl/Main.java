package com.theshy.fullstackbackend.inversionOfControl;

public class Main {
    public static void main(String[] args) {
        MessageService emailService = new EmailService();
        NotificationService notificationService = new NotificationService(emailService);
        notificationService.sendNotification();
    }
}
