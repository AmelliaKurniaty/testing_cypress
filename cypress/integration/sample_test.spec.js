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
        cy.contains('Password harus diisi')
    });

    it('Testing Username terisi dan benar, password terisi salah',()=>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710121')
        cy.get('#password').type('1831710121')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Testing Tampilkan Password', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710121')
        cy.get('#password').type('1831710121')
        cy.get('#chk_tampilkan').check()
    });

    it('Testing Lupa Password', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('Lupa Password?')//.click()
    });

    it('Testing Layout Responsive', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.viewport('iphone-6')

        cy.visit('http://siakad.polinema.ac.id/')
        cy.viewport('macbook-16')

        cy.visit('http://siakad.polinema.ac.id/')
        cy.viewport('ipad-mini')
    });

    it('Testing cara Daftar Ulang', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('PEMBAYARAN DAFTAR ULANG').click()
    });

    it('Testing Mekanisme Pembayaran', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('LIHAT MEKANISME').click()
    });
})