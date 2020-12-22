package com.hellospringboot.hello.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "bank_account")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BankAccount {

    @Id
    @Column(name = "account_no")
    private String accountNo;
    @Column
    private BigDecimal balance;
    @Column(name = "person_id")
    private String personId;
    @Column
    private Integer status;

    public BankAccount(BigDecimal balance, String personId, Integer status) {
        this.balance = balance;
        this.personId = personId;
        this.status = status;
    }
}
