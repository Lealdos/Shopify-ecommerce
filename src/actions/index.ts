'use server';

import { GraphQLClientSingleton } from '@/graphql';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';
import { createAccessToken } from '@/utils/auth/createAccessToken';
import { redirect } from 'next/navigation';

//falta encriptar contraseña y manejo de errores

type GraphQLResponse = {
    customerCreate: {
        customerUserErrors: any[];
        customer: any;
    };
};

export const handleCreateUser = async (formData: FormData) => {
    const graphQLClient = GraphQLClientSingleton.getInstance().getClient();
    const formDataObj = Object.fromEntries(formData);
    /*

    
    console.log(Object.fromEntries(formData.entries()));
    */

    const variables = {
        input: {
            ...formDataObj,
            phone: '+1' + formDataObj.phone,
            acceptsMarketing: formData.get('acceptsMarketing') === 'off',
        },
    };

    const { customerCreate } = await graphQLClient.request<GraphQLResponse>(
        createUserMutation,
        variables
    );
    const { customerUserErrors, customer } = customerCreate;
    if (customer?.lastName) {
        await createAccessToken(
            customer.email,
            formData.get('password') as string
        );
        redirect('/store');
    }
    console.log('customer: ', customer);
    console.log('errors: ', customerUserErrors);
};

export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    const accessToken = await createAccessToken(
        formDataObject.email as string,
        formDataObject.password as string
    );
    if (accessToken) {
        redirect('/store');
    }
};
