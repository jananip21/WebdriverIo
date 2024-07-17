describe('Webdriver university - contact us page', function () {

    beforeEach(async()=>{
        await browser.maximizeWindow();
    })
    
    it('valid submit - submit all information', async()=> {
        await browser.url("/Contact-Us/contactus.html");
        await browser.pause(5000);

    });
    
});