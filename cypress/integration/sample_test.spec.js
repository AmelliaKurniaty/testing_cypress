/// <reference types="cypress" />

describe('Testing Login pada SIAKAD Polinema', () => {
    it('Load Halaman SIAKAD', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Testing Username Kosong',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Testing Password Kosong',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    it('Testing Username dan Password Kosong',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Testing Username Kosong, password terisi',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Testing Username terisi, password kosong',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Testing Username terisi dan benar, password terisi salah',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710121')
        cy.get('#password').type('1831710121')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });
})