import modal from '../components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go(lat = '-20.90708768689379', long = '-44.50690269470215') {
        cy.visit('/', this.mockLocation(lat, long)) 
    }

    form(user) {
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit() {
        cy.contains('button', 'Entrar').click()
    }

    mockLocation(latitude, longitude) {
        return {
            onbeforeunload(win) {
                cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
                    if (latitude && longitude) {
                        return cb({ coords: { latitude, longitude } })
                    }
                    throw err({ code: 1 })
                });
            }
        }

    }
}

export default new LoginPage()