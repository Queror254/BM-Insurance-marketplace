import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CommonsController {
    public async loading({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('loading');
    }

    public async result({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('resultpage/result');
    }

}
