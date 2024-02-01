import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Listing from 'App/Models/Listing';

export default class ListingsController {
    public async create({ request, response }: HttpContextContract) {

        try {
            const { companyName, coverage, payment, discount } = request.body();
            const listing = new Listing()
            listing.companyName = companyName
            listing.coverage = coverage
            listing.payment = payment
            listing.discount = discount

            try {
                await listing.save();
                console.log('listing created successfully')
            } catch (error) {
                console.error(error);
            }

            return response.redirect().toPath('/agent')
        } catch (error) {
            console.log('Error creating Listings:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' })
        }
    }

}
