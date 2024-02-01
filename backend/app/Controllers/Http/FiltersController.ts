import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auto from 'App/Models/Auto'
import Business from 'App/Models/Business'
import Health from 'App/Models/Health'
import Renter from 'App/Models/Renter'
import Life from 'App/Models/Life'
import Homeowner from 'App/Models/Homeowner'

export default class FiltersController {
    public async filter({ response, request }: HttpContextContract) {
        // Extract filtering parameters from the request
        const { insuranceType, age, zipCode, priceOrder } = request.all();

        if (insuranceType === 'auto') {
            let query = Auto.query();

            // Apply filters
            /* if (insuranceType) {
                 query = query.where('insurance_type', insuranceType);
             }
 
             if (age) {
                 query = query.where('age', age);
             } */

            if (zipCode) {
                query = query.where('zip_code', zipCode);
            }

            /* Apply sorting
            if (priceOrder === 'lowToHigh') {
                query = query.orderBy('price', 'asc');
            } else if (priceOrder === 'highToLow') {
                query = query.orderBy('price', 'desc');
            }
*/
            // Fetch the results
            const insuranceData = await query.exec();

            console.log('insuranceData', insuranceData)

            // Return the filtered and sorted data
            return insuranceData;
        } else

            if (insuranceType === 'life') {
                let query = Life.query();

                // Apply filters
                if (insuranceType) {
                    query = query.where('insurance_type', insuranceType);
                }

                if (age) {
                    query = query.where('age', age);
                }

                if (zipCode) {
                    query = query.where('zip_code', zipCode);
                }

                // Apply sorting
                if (priceOrder === 'lowToHigh') {
                    query = query.orderBy('price', 'asc');
                } else if (priceOrder === 'highToLow') {
                    query = query.orderBy('price', 'desc');
                }

                // exec the results
                const insuranceData = await query.exec();

                console.log('insuranceData', insuranceData)

                // Return the filtered and sorted data
                return insuranceData;
            } else

                if (insuranceType === 'homeowner') {
                    let query = Homeowner.query();

                    // Apply filters
                    if (insuranceType) {
                        query = query.where('insurance_type', insuranceType);
                    }

                    if (age) {
                        query = query.where('age', age);
                    }

                    if (zipCode) {
                        query = query.where('zip_code', zipCode);
                    }

                    // Apply sorting
                    if (priceOrder === 'lowToHigh') {
                        query = query.orderBy('price', 'asc');
                    } else if (priceOrder === 'highToLow') {
                        query = query.orderBy('price', 'desc');
                    }

                    // exec the results
                    const insuranceData = await query.exec();

                    console.log('insuranceData', insuranceData)

                    // Return the filtered and sorted data
                    return insuranceData;
                } else

                    if (insuranceType === 'health') {
                        let query = Health.query();

                        // Apply filters
                        if (insuranceType) {
                            query = query.where('insurance_type', insuranceType);
                        }

                        if (age) {
                            query = query.where('age', age);
                        }

                        if (zipCode) {
                            query = query.where('zip_code', zipCode);
                        }

                        // Apply sorting
                        if (priceOrder === 'lowToHigh') {
                            query = query.orderBy('price', 'asc');
                        } else if (priceOrder === 'highToLow') {
                            query = query.orderBy('price', 'desc');
                        }

                        // exec the results
                        const insuranceData = await query.exec();

                        console.log('insuranceData', insuranceData)

                        // Return the filtered and sorted data
                        return insuranceData;
                    } else

                        if (insuranceType === 'business') {
                            let query = Business.query();

                            // Apply filters
                            if (insuranceType) {
                                query = query.where('insurance_type', insuranceType);
                            }

                            if (age) {
                                query = query.where('age', age);
                            }

                            if (zipCode) {
                                query = query.where('zip_code', zipCode);
                            }

                            // Apply sorting
                            if (priceOrder === 'lowToHigh') {
                                query = query.orderBy('price', 'asc');
                            } else if (priceOrder === 'highToLow') {
                                query = query.orderBy('price', 'desc');
                            }

                            // exec the results
                            const insuranceData = await query.exec();
                            console.log('insuranceData', insuranceData)

                            // Return the filtered and sorted data
                            return insuranceData;
                        } else

                            if (insuranceType === 'renter') {
                                let query = Renter.query();

                                // Apply filters
                                if (insuranceType) {
                                    query = query.where('insurance_type', insuranceType);
                                }

                                if (age) {
                                    query = query.where('age', age);
                                }

                                if (zipCode) {
                                    query = query.where('zip_code', zipCode);
                                }

                                // Apply sorting
                                if (priceOrder === 'lowToHigh') {
                                    query = query.orderBy('price', 'asc');
                                } else if (priceOrder === 'highToLow') {
                                    query = query.orderBy('price', 'desc');
                                }

                                // exec the results
                                const insuranceData = await query.exec();

                                // Return the filtered and sorted data
                                console.log('insuranceData', insuranceData)
                                return insuranceData;
                            } else {
                                console.log('No insurnce type was selected')
                            }



    }

}
