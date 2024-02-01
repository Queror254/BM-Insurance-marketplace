// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LeadsController {
    public async auto({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/auto');
    }

    public async health({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/health');
    }

    public async business({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/business');
    }

    public async life({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/life');
    }

    public async homeowner({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/homeowner');
    }

    public async renters({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('leadsform/renters');
    }
}
