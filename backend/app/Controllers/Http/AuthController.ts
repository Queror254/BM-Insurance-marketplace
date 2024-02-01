import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
    public async register({ request, response, auth }: HttpContextContract) {

        const userSchema = schema.create({
            firstName: schema.string(),
            secondName: schema.string(),
            email: schema.string([rules.email(), rules.trim()]),
            password: schema.string([rules.minLength(8)]),
            streetAddress: schema.string(),
            aptNo: schema.string(),
            city: schema.string(),
            state: schema.string(),
            zipCode: schema.number(),
        })
        try {
            const data = await request.validate({ schema: userSchema });
            console.log('Received data:', data);

            const user = await User.create(data);
            console.log('User created successfully:', user.toJSON());

            await auth.login(user);
            console.log('User logged in successfully.');

            return response.redirect().toPath('/');
        } catch (error) {
            console.error('Error during registration:', error.message);
            return response.status(500).send({ error: 'Failed to create user.' });
        }

    }
    //show registration page:
    public async showRegister({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('auth/signup');
    }

    public async login({ request, response, session, auth }: HttpContextContract) {

        const { email, password } = request.only(['email', 'password'])

        try {
            await auth.attempt(email, password)
        } catch (_error) {
            session.flash('error', 'Email or Password is incorrect')
            return response.redirect().back();
        }

        return response.redirect().toPath('/')
    }
    //show login page:
    public async showLogin({ view }: HttpContextContract) {
        // Render the 'form.edge' template
        return view.render('auth/login');
    }

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()

        return response.redirect().toPath('/')
    }


}
