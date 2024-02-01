// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Agent from 'App/Models/Agent';

export default class DasboardsController {
    //Admin dash:
    public async admin({ view }: HttpContextContract) {

        //get all user data from database
        const users = await User.all();

        //pass the user data to the dashboard
        return view.render('dashboard/admindash', { users });
    }

    //Agent dash:
    public async agent({ view }: HttpContextContract) {

        //get all agent data from database
        const agents = await Agent.all();

        //pass the agent data to the dashboard
        return view.render('dashboard/agentdash', { agents });
    }

}
