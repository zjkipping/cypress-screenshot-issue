describe('example-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should take a screenshot of the full page at 1920x1080', () => {
    cy.viewport(1920, 1080);
    cy.screenshot('1920x1080-full-page', {
      capture: 'fullPage',
      overwrite: true,
    });
  });

  it('should take a screenshot of the viewport at 1920x1080', () => {
    cy.viewport(1920, 1080);
    cy.screenshot('1920x1080-viewport', {
      capture: 'viewport',
      overwrite: true,
    });
  });

  it('should take a screenshot of the runner at 1920x1080', () => {
    cy.viewport(1920, 1080);
    cy.screenshot('1920x1080-runner', {
      capture: 'runner',
      overwrite: true,
    });
  });

  it('should take a screenshot of the full page at ultra-wide', () => {
    cy.viewport(3840, 1080);
    cy.screenshot('3840x1080-full-page', {
      capture: 'fullPage',
      overwrite: true,
    });
  });

  it('should take a screenshot of the viewport at ultra-wide', () => {
    cy.viewport(3840, 1080);
    cy.screenshot('3840x1080-viewport', {
      capture: 'viewport',
      overwrite: true,
    });
  });

  it('should take a screenshot of the runner at ultra-wide', () => {
    cy.viewport(3840, 1080);
    cy.screenshot('3840x1080-runner', {
      capture: 'runner',
      overwrite: true,
    });
  });

  it('should take a screenshot of the full page at 4k', () => {
    cy.viewport(3840, 2160);
    cy.screenshot('3840x2160-full-page', {
      capture: 'fullPage',
      overwrite: true,
    });
  });

  it('should take a screenshot of the viewport at 4k', () => {
    cy.viewport(3840, 2160);
    cy.screenshot('3840x2160-viewport', {
      capture: 'viewport',
      overwrite: true,
    });
  });

  it('should take a screenshot of the runner at 4k', () => {
    cy.viewport(3840, 2160);
    cy.screenshot('3840x2160-runner', {
      capture: 'runner',
      overwrite: true,
    });
  });
});
