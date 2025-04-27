/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('US-012 Cadastro de membros', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')
    })
    it('Deve cadastrar inserindo todos os campos obrigatórios', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Cadastro realizado com sucesso!')
    })

    it('Deve cadastrar inserindo campo telefone', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-phone"]').type(faker.string.numeric(9))
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Cadastro realizado com sucesso!')
    })

    it('Deve cadastrar com nomes acentuados', () => {
        cy.get('input[id="signup-firstname"]').type('Mário')
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-phone"]').type(faker.string.numeric(9))
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Cadastro realizado com sucesso!')
    })

    it('Deve cadastrar sem inserir telefone', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Cadastro realizado com sucesso!')
    })

    it('Não deve cadastrar com todos os campos obrigatórios em branco', () => {
        cy.get('button[id="signup-button').click()
        cy.contains('Nome não pode estar vazio')
    })

    it('Não deve cadastrar com alguns campos obrigatórios em branco', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Sobrenome não pode estar vazio')
    })

    it('Não deve cadastrar inserindo nome com caracteres inválidos', () => {
        cy.get('input[id="signup-firstname"]').type('@#$%*(#&$%*(')
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    })

    it('Não deve cadastrar inserindo sobrenome com caracteres inválidos', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type('@#$%*(#&$%*(')
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    })

    it('Não deve cadastrar inserindo nome com números', () => {
        cy.get('input[id="signup-firstname"]').type(faker.string.numeric(5))
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    })

    it('Não deve cadastrar inserindo sobrenome com números', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.string.numeric(5))
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    })

    it('Não deve cadastrar inserindo telefone com letras', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.string.alpha())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-phone"]').type(faker.string.alpha(5))
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Telefone deve conter apenas números')
    })

    it('Não deve cadastrar inserindo senha com 7 caracteres', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Pass12@');
        cy.get('button[id="signup-button').click()
        cy.contains('Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })

    it('Não deve cadastrar inserindo uma senha sem um caractere especial', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Senha123');
        cy.get('button[id="signup-button').click()
        cy.contains('Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })

    it('Não deve cadastrar inserindo uma senha sem 1 letra maiúscula', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('senha12@');
        cy.get('button[id="signup-button').click()
        cy.contains('Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })

    it('Não deve cadastrar inserindo uma senha somente com letras', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('minhasenhateste');
        cy.get('button[id="signup-button').click()
        cy.contains('Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })

    it('Não deve cadastrar inserindo e-mail com formato inválido', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type('maliacat')
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('E-mail deve ser um email válido')
    })

    it('Não deve cadastrar inserindo nome e não sobrenome', () => {
        cy.get('input[id="signup-firstname"]').type(faker.person.firstName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Sobrenome não pode estar vazio')
    })

    it('Não deve cadastrar inserindo sobrenome e não nome', () => {
        cy.get('input[id="signup-lastname"]').type(faker.person.lastName())
        cy.get('input[id="signup-email"]').type(faker.internet.email())
        cy.get('input[id="signup-password"]').type('Password123@');
        cy.get('button[id="signup-button').click()
        cy.contains('Nome não pode estar vazio')
    })
})