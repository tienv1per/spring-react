package com.theshy.fullstackbackend.repositories;

import com.theshy.fullstackbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
