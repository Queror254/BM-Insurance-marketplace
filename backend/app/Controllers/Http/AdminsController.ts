// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Admin from 'App/Models/Admin';
import { schema, rules } from '@ioc:Adonis/Core/Validator'




export default class AdminsController {

    //show signup:
    public async showRegister({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('auth/adminsignup');
    }

    public async register({ request, response, auth }: HttpContextContract) {

        const adminSchema = schema.create({
            email: schema.string([rules.email(), rules.trim()]),
            password: schema.string([rules.minLength(8)]),
        })
        try {
            const data = await request.validate({ schema: adminSchema });
            console.log('Received data:', data);

            const admin = await Admin.create(data);
            console.log('User created successfully:', admin.toJSON());

            await auth.login(admin);
            console.log('User logged in successfully.');

            return response.redirect().toPath('/admin/login');
        } catch (error) {
            console.error('Error during registration:', error.message);
            return response.status(500).send({ error: 'Failed to create user.' });
        }



    }

    //show login:
    public async showLogin({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('auth/adminlogin');
    }

    public async login({ request, response, session, auth }: HttpContextContract) {

        const { email, password } = request.only(['email', 'password'])

        try {
            await auth.attempt(email, password)
        } catch (_error) {
            session.flash('error', 'Email or Password is incorrect')
            return response.redirect().back();
        }

        return response.redirect().toPath('/admin/dashboard_')
    }

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()

        return response.redirect().toPath('/admin/login')
    }

}
