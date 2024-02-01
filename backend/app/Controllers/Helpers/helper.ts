import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export async function renderLoadingView(response: HttpContextContract['response'], view: HttpContextContract['view'], responseData: string, delay: number) {
    const loading = await view.render('loading', { responseData });

    // Send the rendered view as a response
    response.send(loading);

    // Add a delay before redirection
    await new Promise(resolve => setTimeout(resolve, delay));
}