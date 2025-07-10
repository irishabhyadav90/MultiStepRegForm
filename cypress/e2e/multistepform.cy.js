/* eslint-disable no-undef */
describe('MultiStep Registration Form', () => {
    beforeEach(() => {
      cy.visit('/register'); // Change to actual form route if needed
    });
  
    it('Step 1: fills and submits personal info correctly', () => {
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="residenceCountry"]').select('United Arab Emirates');
      cy.get('input[name="email"]').type('john.doe@example.com');

      cy.get('[data-testid="phone-input"]', { timeout: 10000 })
      .should('be.visible')
      .clear({ force: true })
      .type('501234567', { force: true });
      
      cy.get('#agreedToTerms').check({ force: true });
      cy.contains('Next').click();
  
      cy.contains('Please enter below information to create your account.'); // Assert step 2 loaded
    });
  
    it('Step 2: selects OTP method and proceeds', () => {
      // First, fill previous step to get here
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="residenceCountry"]').select('United Arab Emirates');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('[data-testid="phone-input"]', { timeout: 10000 })
      .should('be.visible')
      .clear({ force: true })
      .type('501234567', { force: true });
      cy.get('#agreedToTerms').check({ force: true });
      cy.contains('Next').click();
  
      // Now on OTP method screen
      cy.get('input[type="radio"][value="email"]').check({ force: true });
      cy.contains('Next').click();
  
      cy.contains('OTP Verification'); // Assert step 3 loaded
    });
  
    it('Step 3: enters OTP and finishes flow', () => {
      // Fill steps 1 & 2
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="residenceCountry"]').select('United Arab Emirates');
      cy.get('input[name="email"]').type('john.doe@example.com');
      
      cy.get('[data-testid="phone-input"]', { timeout: 10000 })
      .should('be.visible')
      .clear({ force: true })
      .type('501234567', { force: true });
      cy.get('#agreedToTerms').check({ force: true });
      cy.contains('Next').click();
  
      cy.get('input[type="radio"][value="email"]').check({ force: true });
      cy.contains('Next').click();
  
      // Fill OTP fields
      cy.get('input[maxlength="1"]').eq(0).type('1');
      cy.get('input[maxlength="1"]').eq(1).type('2');
      cy.get('input[maxlength="1"]').eq(2).type('3');
      cy.get('input[maxlength="1"]').eq(3).type('4');
  
      cy.contains('Next').click();
  
      // Add final assert or redirect check if needed
    });
  });