// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auto from 'App/Models/Auto'
import Business from 'App/Models/Business'
import Health from 'App/Models/Health'
import Renter from 'App/Models/Renter'
import Life from 'App/Models/Life'
import Homeowner from 'App/Models/Homeowner'

import { renderLoadingView } from '../Helpers/helper';

export default class QuotesController {

    public async auto({ request, response, view }: HttpContextContract) {
        try {
            const {
                firstname,
                lastname,
                dob,
                streetaddress,
                city,
                state,
                zipCode,
                phonenumber,
                email,
                contactTime,
                preferredContactMethod,
                placeOfResidence,
                vehicleMake,
                vehicleModel,
                vehicleYear,
                haveVehicleInsurance,
                safetyFeature,
                automobileVin,
                vehicleUsage,
                Drivers,
                mileage,
                licenseIssueDate,
                accidentHistory,
                accidentDesc,
                gender,
                maritalStatus,
                creditScore,
                getDiscount,
            } = request.body();

            // Use the create method to create and save a new record
            await Auto.create({
                firstName: firstname,
                lastName: lastname,
                dob: dob,
                streetAddress: streetaddress,
                city: city,
                state: state,
                zipCode: zipCode,
                phoneNumber: phonenumber,
                email: email,
                contactTime: contactTime,
                preferredContactMethod: preferredContactMethod,
                placeOfResidence: placeOfResidence,
                vehicleMake: vehicleMake,
                vehicleModel: vehicleModel,
                vehicleYear: vehicleYear,
                haveVehicleInsurance: haveVehicleInsurance,
                safetyFeature: safetyFeature,
                automobileVin: automobileVin,
                vehicleUsage: vehicleUsage,
                Drivers: Drivers,
                mileage: mileage,
                licenseIssueDate: licenseIssueDate,
                accidentHistory: accidentHistory,
                accidentDesc: accidentDesc,
                gender: gender,
                maritalStatus: maritalStatus,
                creditScore: creditScore,
                getDiscount: getDiscount,
            });

            // Set a response message if needed
            const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
            // Use the function to render the view and add a delay
            await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

            // Redirect the user to the 'quote' path
            return response.redirect().toRoute('page.result');
        } catch (error) {
            console.error('Error saving data:', error.message);
            return response.status(500).json({ message: 'Error saving data', error: error.message });
        }
    }

    public async health({ request, response, view }: HttpContextContract) {
        const { firstname,
            middlename,
            lastname,
            state,
            zipCode,
            question_1, //what is your goal?
            question_2, //how did you find out about our service?
            question_3, //Would you suggest our company to a freind

        } = request.body();

        const health = new Health();
        health.firstName = firstname;
        health.middleName = middlename;
        health.lastName = lastname;
        health.state = state;
        health.zipCode = zipCode;
        health.goal = question_1;
        health.discoverySource = question_2;
        health.recommendToFriend = question_3

        await health.save();

        // Set a response message if needed
        const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
        // Use the function to render the view and add a delay
        await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

        // Redirect the user to the 'quote' path
        return response.redirect().toRoute('page.result');
    }

    public async life({ request, response, view }: HttpContextContract) {
        const { firstname,
            middlename,
            lastname,
            state,
            zipCode,
            question_1, //what is your goal?
            question_2, //how did you find out about our service?
            question_3, //Would you suggest our company to a freind

        } = request.body();
        const life = new Life();

        life.firstName = firstname;
        life.middleName = middlename;
        life.lastName = lastname;
        life.state = state;
        life.zipCode = zipCode;
        life.goal = question_1;
        life.discoverySource = question_2;
        life.recommendToFriend = question_3;

        await life.save();

        // Set a response message if needed
        const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
        // Use the function to render the view and add a delay
        await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

        // Redirect the user to the 'quote' path
        return response.redirect().toRoute('page.result');
    }

    public async renters({ request, response, view }: HttpContextContract) {
        const { firstname,
            middlename,
            lastname,
            state,
            zipCode,
            question_1, //what is your goal?
            question_2, //how did you find out about our service?
            question_3, //Would you suggest our company to a freind

        } = request.body();
        const renter = new Renter();

        renter.firstName = firstname;
        renter.middleName = middlename;
        renter.lastName = lastname;
        renter.state = state;
        renter.zipCode = zipCode;
        renter.goal = question_1;
        renter.discoverySource = question_2;
        renter.recommendToFriend = question_3;

        await renter.save();

        // Set a response message if needed
        const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
        // Use the function to render the view and add a delay
        await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

        // Redirect the user to the 'quote' path
        return response.redirect().toRoute('page.result');

    }

    public async business({ request, response, view }: HttpContextContract) {
        const { firstname,
            middlename,
            lastname,
            state,
            zipCode,
            question_1, //what is your goal?
            question_2, //how did you find out about our service?
            question_3, //Would you suggest our company to a freind

        } = request.body();
        const business = new Business();

        business.firstName = firstname;
        business.middleName = middlename;
        business.lastName = lastname;
        business.state = state;
        business.zipCode = zipCode;
        business.goal = question_1;
        business.discoverySource = question_2
        business.recommendToFriend = question_3;

        await business.save();

        // Set a response message if needed
        const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
        // Use the function to render the view and add a delay
        await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

        // Redirect the user to the 'quote' path
        return response.redirect().toRoute('page.result');
    }

    public async home({ request, response, view }: HttpContextContract) {
        const { firstname,
            middlename,
            lastname,
            state,
            zipCode,
            question_1, //what is your goal?
            question_2, //how did you find out about our service?
            question_3, //Would you suggest our company to a freind

        } = request.body();
        const home = new Homeowner();

        home.firstName = firstname;
        home.middleName = middlename;
        home.lastName = lastname;
        home.state = state;
        home.zipCode = zipCode;
        home.goal = question_1;
        home.discoverySource = question_2;
        home.recommendToFriend = question_3;

        await home.save();

        // Set a response message if needed
        const responseData = "Data saved successfully. You will be redirected back after 10 seconds";
        // Use the function to render the view and add a delay
        await renderLoadingView(response, view, responseData, 10000); // 10 seconds */

        // Redirect the user to the 'quote' path
        return response.redirect().toRoute('page.result');
    }

    /*
            // Render the 'loading' view with the response data
        const loading = await view.render('loading', { responseData });

        // Send the rendered view as a response
        response.send(loading);

        // Add a delay before redirection
        await new Promise(resolve => setTimeout(resolve, 10000)); // 5 seconds*/


}
