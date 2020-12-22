package com.hellospringboot.hello.repositories;

import com.hellospringboot.hello.models.BankAccount;
import org.springframework.data.repository.CrudRepository;

public interface BankAccountRepository extends CrudRepository<BankAccount, String> {
}
