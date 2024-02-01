// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Agent from 'App/Models/Agent';

export default class AgentsController {
    public async register({ request, response, auth }: HttpContextContract) {

        const agentSchema = schema.create({
            firstName: schema.string(),
            secondName: schema.string(),
            email: schema.string([rules.email(), rules.trim()]),
            password: schema.string([rules.minLength(4)]),
        })
        try {
            const data = await request.validate({ schema: agentSchema });
            console.log('Received data:', data);

            const agent = await Agent.create(data);
            console.log('User created successfully:', agent.toJSON());

            await auth.login(agent);
            console.log('User logged in successfully.');

            return response.redirect().toPath('/agent');
        } catch (error) {
            console.error('Error during registration:', error.message);
            return response.status(500).send({ error: 'Failed to create user.' });
        }

    }

    public async login({ request, response, session, auth }: HttpContextContract) {

        const { email, password } = request.only(['email', 'password'])

        try {
            await auth.attempt(email, password)
        } catch (_error) {
            session.flash('error', 'Email or Password is incorrect')
            return response.redirect().back();
        }

        return response.redirect().toPath('/agent')
    }

    public async logout({ response, auth }: HttpContextContract) {
        await auth.logout()

        return response.redirect().toPath('/agentlogin')
    }

}
