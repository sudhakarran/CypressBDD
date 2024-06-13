import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"

const API_CONFIG = Cypress.env('api')
let endpoint;

Given('I send a request to create new user', () => {
    endpoint = API_CONFIG.url + '/users';
  })
  
  Then('verify user is created', () => {
    cy.request({
      method: 'POST', 
      url: API_CONFIG.url + '/users',
      body: {"name": "morpheus", "job": "leader"}, 
    }).then( ({ body }) => {
        expect(body.id).to.be.a('string')
        expect(body.name).to.eq('morpheus')
        expect(body.job).to.eq('leader')
    })
  })

  Given('I send a request to update user {string}', (userid: string) => {
    endpoint = API_CONFIG.url + '/users/' + userid;
  })
  
  Then('verify user is updated', () => {
    cy.request({
      method: 'PUT', 
      url: API_CONFIG.url + '/users/2',
      body: {"name": "SK", "job": "SKE resident"}, 
    }).then( ({ body }) => {
        expect(body.name).to.eq('SK')
        expect(body.job).to.eq('SKE resident')
    })
  })