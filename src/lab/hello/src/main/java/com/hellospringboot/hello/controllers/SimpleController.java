package com.hellospringboot.hello.controllers;

import com.hellospringboot.hello.models.BankAccount;
import com.hellospringboot.hello.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SimpleController {

    @Autowired
    private BankAccountRepository bankAccountRepository;

    @RequestMapping("/")
    public String home() {
        return  "Get /account to see all account, " +
                "Post /account to add new account, " +
                "Put /{id} to update account" +
                "Delete /{id} to delete account";
    }

    @PostMapping("/account")
    public BankAccount addAccount(@RequestBody BankAccount bankAccount) {
        return bankAccountRepository.save(bankAccount);
    }

    @GetMapping("/account")
    public List<BankAccount> getAccounts() {
        Iterable<BankAccount> accounts = bankAccountRepository.findAll();
        List<BankAccount> result = new ArrayList<>();
        for(BankAccount acc: accounts) {
             result.add(acc);
        }
        return result;
    }

    @GetMapping("/{id}")
    public BankAccount getAccountById(@PathVariable String id) {
        return bankAccountRepository.findById(id).get();
    }

    @PutMapping("/{id}")
    public BankAccount updateAccountById(@PathVariable String id, @RequestBody BankAccount bankAccount) {
        BankAccount record = bankAccount;
        record.setAccountNo(id);
        return bankAccountRepository.save(record);
    }

    @DeleteMapping("/{id}")
    public BankAccount deleteAccountById(@PathVariable String id) {
        BankAccount record = bankAccountRepository.findById(id).get();
        bankAccountRepository.delete(record);
        return record;
    }


}
